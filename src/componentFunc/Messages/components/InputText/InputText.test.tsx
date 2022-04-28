/* eslint-disable no-undef */
import React from 'react';
import { InputText } from './InputText';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@babel/plugin-transform-runtime';

describe('InputText', () => {
  it('render component', () => {
    render(
      <InputText
        changeText={function (): void {
          throw new Error('Function not implemented.');
        }}
        value={''}
      />
    );
  });
  it('render with snapshot', () => {
    const { asFragment } = render(
      <InputText
        changeText={function (): void {
          throw new Error('Function not implemented.');
        }}
        value={''}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('render with placeholder', () => {
    render(
      <InputText
        changeText={function (): void {
          throw new Error('Function not implemented.');
        }}
        value={''}
      />
    );
    expect(
      screen.getByPlaceholderText(/write your message/i)
    ).toBeInTheDocument();
  });
  it('render myltiply components', () => {
    render(
      <InputText
        changeText={function (): void {
          throw new Error('Function not implemented.');
        }}
        value={''}
      />
    );
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
  it('input value ', async () => {
    await userEvent.type(screen.getByTestId('custom-element'), 'test');
    expect(screen.getByTestId('custom-element')).toHaveValue('test');
  });
  it('input value ', async () => {
    await userEvent.type(screen.getByTestId('custom-element'), '123');
    expect(screen.getByTestId('custom-element')).toHaveValue('123');
  });
});
