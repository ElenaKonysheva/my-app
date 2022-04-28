import React from 'react';
import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@babel/plugin-transform-runtime';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('render component', () => {
    render(
      <Button
        disabled={false}
        clickDelete={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });
  it('render with snapshot', () => {
    const { asFragment } = render(
      <Button
        disabled={false}
        clickDelete={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('render with text', () => {
    render(
      <Button
        disabled={false}
        clickDelete={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/отправить форму/)).toBeInTheDocument();
  });
  it('render with text', () => {
    render(
      <Button
        disabled={false}
        clickDelete={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText(/очистить/)).toBeInTheDocument();
  });
  it('render myltiply components', () => {
    render(
      <Button
        disabled={false}
        clickDelete={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });
  it('button is disabled', () => {
    render(
      <Button
        disabled
        clickDelete={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
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
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
