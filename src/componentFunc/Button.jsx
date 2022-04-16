import React from 'react';
export const Button = (props) => {
  return (
    <>
      <button type="submit" disabled={!props.value}>
        отправить форму
      </button>
      <button onClick={props.clickDelete} type="reset">
        очистить
      </button>
    </>
  );
};
