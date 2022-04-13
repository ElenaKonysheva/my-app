import React, { useState } from 'react';
import { InputText } from './InputText';
import { InputName } from './InputName';
import { Button } from './Button';
import { CheckedForm } from './CheckedForm';

export const Messages = () => {
  const [name, setName] = useState('');
  const [value, setText] = useState('');
  const [messages, setMessages] = useState('');

  const handleClickShow = () => {
    setMessages(value);
  };
  const handleClickDelete = () => {
    setText('');
    setName('');
    setMessages('');
  };

  const handleChangeText = (ev) => {
    setText(ev.target.value);
  };

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  };

  return (
    <div className="container">
      <CheckedForm />
      <p>Почему вы ее любите</p>
      <InputName changeName={handleChangeName} name={name} />
      <InputText value={value} changeText={handleChangeText} />
      <br />
      <Button click={handleClickShow} clickDelete={handleClickDelete} />
      <p> Сообщение от {name}</p>
      <div className="message">{messages}</div>
    </div>
  );
};
