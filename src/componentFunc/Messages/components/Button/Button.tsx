import React, { FC } from 'react';
import style from './Button.module.css';
// import PropTypes from 'prop-types';
interface ButtonProps {
  disabled: boolean;
  clickDelete: () => void;
}
export const Button: FC<ButtonProps> = (props) => {
  return (
    <>
      <button type="submit" disabled={props.disabled} className={style.button}>
        отправить форму
      </button>
      <button onClick={props.clickDelete} type="reset" className={style.button}>
        очистить
      </button>
    </>
  );
};
// Button.propTypes = {
//   clickDelete: PropTypes.func,
//   disabled: PropTypes.bool,
// };
