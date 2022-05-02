import React from 'react';
import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@babel/plugin-transform-runtime';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('render component', () => {
    const clickDelete = jest.fn();
    render(<Button disabled={false} clickDelete={clickDelete} />);
  });
  it('render with snapshot', () => {
    const clickDelete = jest.fn();
    const { asFragment } = render(
      <Button disabled={false} clickDelete={clickDelete} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('render with text', () => {
    const clickDelete = jest.fn();
    render(<Button disabled={false} clickDelete={clickDelete} />);
    expect(screen.getByText(/отправить форму/)).toBeInTheDocument();
  });
  it('render with text', () => {
    const clickDelete = jest.fn();
    render(<Button disabled={false} clickDelete={clickDelete} />);
    expect(screen.getByText(/очистить/)).toBeInTheDocument();
  });
  it('render myltiply components', () => {
    const clickDelete = jest.fn();
    render(<Button disabled={false} clickDelete={clickDelete} />);
    expect(screen.queryAllByRole('button').length).toBe(2);
  });
  it('button is disabled', () => {
    const clickDelete = jest.fn();
    render(<Button clickDelete={clickDelete} disabled />);
    expect(screen.getByText(/отправить форму/)).toBeDisabled();
  });
  it('button click with fireEvent', () => {
    const handleClick = jest.fn();
    render(<Button clickDelete={handleClick} disabled={false} />);
    fireEvent.click(screen.getByText(/очистить/i));
    expect(handleClick).toBeCalledTimes(1);
  });
  it('button async click ', async () => {
    const handleClick = jest.fn();
    render(
      <Button
        clickDelete={() => setTimeout(handleClick, 500)}
        disabled={false}
      />
    );
    await userEvent.click(screen.getByText(/очистить/i));
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  });
});
