import React, { FC } from 'react';
import './Button.css';
interface ButtonProps {
  disabled: boolean;
  clickDelete: () => void;
}
export const Button: FC<ButtonProps> = (props) => {
  return (
    <>
      <button type="submit" disabled={props.disabled}>
        отправить форму
      </button>
      <button onClick={props.clickDelete} type="reset">
        очистить
      </button>
    </>
  );
};
