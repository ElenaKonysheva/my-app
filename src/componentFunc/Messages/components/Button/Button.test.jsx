import React from "react";
import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import "@babel/plugin-transform-runtime"
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@storybook/testing-library";

describe("Button", () => {
  it("render component", () => {
    render(<Button />);
  });
  it("render with snapshot", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render with text", () => {
    render(<Button />);
    expect(screen.getByText(/отправить форму/)).toBeInTheDocument();
  });
  it("render with text", () => {
    render(<Button />);
    expect(screen.getByText(/очистить/)).toBeInTheDocument();
  });
  it("render myltiply components", () => {
    render(<Button />);
    expect(screen.queryAllByRole("button").length).toBe(2);
  });
  it("button is disabled", () => {
    render(<Button disabled />);
    expect(screen.getByText(/отправить форму/)).toBeDisabled();
  });
  it("button click with fireEvent", () => {
    const handleClick =jest.fn();
    render(<Button clickDelete ={handleClick} />);
    fireEvent.click(screen.getByText(/очистить/i));
    expect(handleClick).toBeCalledTimes(1)
  });
  it("button async click ", async() => {
    const handleClick =jest.fn();
    render(<Button clickDelete ={() => setTimeout(handleClick, 500)} />);
    userEvent.click(screen.getByText(/очистить/i));

    await waitFor(( )=>expect(handleClick).toHaveBeenCalledTimes(1));
  
  });
});

