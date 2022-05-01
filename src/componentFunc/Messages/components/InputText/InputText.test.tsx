import React from 'react';
import { InputText } from './InputText';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@babel/plugin-transform-runtime';

describe('InputText', () => {
  it('render component', () => {
    render(<InputText />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<InputText />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('render with placeholder', () => {
    render(<InputText />);
    expect(
      screen.getByPlaceholderText(/write your message/i)
    ).toBeInTheDocument();
  });
  it('render myltiply components', () => {
    render(<InputText />);
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
  it('input value test', async () => {
    render(<InputText />);
    await userEvent.type(
      screen.getByPlaceholderText(/write your message/i),
      'test'
    );
    expect(screen.getByPlaceholderText(/write your message/i)).toHaveValue(
      'test'
    );
  });
  it('input value 123', async () => {
    render(<InputText />);
    await userEvent.type(
      screen.getByPlaceholderText(/write your message/i),
      '123'
    );
    expect(screen.getByPlaceholderText(/write your message/i)).toHaveValue(
      '123'
    );
  });
});
