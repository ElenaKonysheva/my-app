import React from "react";
import { InputText } from "./InputText";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@babel/plugin-transform-runtime"

describe("InputText", () => {
  it("render component", () => {
    render(<InputText />);
  });
  it("render with snapshot", () => {
    const { asFragment } = render(<InputText />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render with placeholder", () => {
    render(<InputText />);
    expect(
      screen.getByPlaceholderText(/write your message/i)
    ).toBeInTheDocument();
  });
  it("render myltiply components", () => {
    render(<InputText />);
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
  });
  it("input submit return number", () => {
    const setup = () => {
      const utils = render(<InputText />);
      const input = utils.getByTestId("custom-element");
      return {
        input,
        ...utils,
      };
    };
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
  it("input submit return string", () => {
    const setup = () => {
      const utils = render(<InputText />);
      const input = utils.getByTestId("custom-element");
      return {
        input,
        ...utils,
      };
    };
    const { input } = setup();
    fireEvent.change(input, { target: { value: "привет" } });
    expect(input.value).toBe("привет");
  });
  it("input submit return null", () => {
    const setup = () => {
      const utils = render(<InputText />);
      const input = utils.getByTestId("custom-element");
      return {
        input,
        ...utils,
      };
    };
    const { input } = setup();
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
  });

});
