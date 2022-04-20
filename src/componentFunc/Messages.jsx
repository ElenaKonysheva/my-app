import React, { useEffect, useState } from 'react';
import { InputText } from './Messages/components/InputText/InputText';
import { Button } from './Messages/components/Button/Button';
import { MessageList } from './Messages/components/MessageList';
import { NAME } from '../constans';
export const Messages = () => {
  const [textMessage, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const addMessageHandler = (ev) => {
    let newMessage = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: NAME.USER,
      value: textMessage,
      timestamp: new Date(),
    };
    ev.preventDefault();
    setMessages([...messages, newMessage]);
  };
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    setText('');
  };
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].name !== NAME.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: Math.floor(Math.random() * 10000) + 1,
            name: NAME.BOT,
            value: 'hi how i can help you',
            timestamp: new Date(),
          },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);
  const handleChangeText = (ev) => {
    setText(ev.target.value);
  };
  return (
    <div className="container">
      <InputText value={textMessage} changeText={handleChangeText} />
      <br />
      <form action="#" onSubmit={addMessageHandler}>
        <MessageList messages={messages} />
        <Button clickDelete={handleClickDelete} disabled={!textMessage} />
      </form>
    </div>
  );
};
