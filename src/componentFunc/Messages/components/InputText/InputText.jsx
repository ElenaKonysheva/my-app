import React from 'react';
export const InputText = (props) => {
  return (
    <textarea data-testid="custom-element"
      placeholder="write your message"
      onChange={props.changeText}
      value={props.value}
    ></textarea>
  );
};
