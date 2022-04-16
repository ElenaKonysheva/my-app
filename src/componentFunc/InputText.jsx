import React from 'react';
export const InputText = (props) => {
  return (
    <textarea
      placeholder="write your message"
      onChange={props.changeText}
      value={props.value}
    ></textarea>
  );
};
