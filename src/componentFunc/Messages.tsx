/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState, memo } from 'react';
import { InputText } from './Messages/components/InputText';
import { Button } from './Messages/components/Button';
import { MessageList } from './Messages/components/MessageList';
import { nanoid } from 'nanoid';
import { NAME } from '../constans';

interface newMessage {
  id: string;
  name: string;
  value: string;
  timestamp: Date;
}
export const Messages = memo(() => {
  const [textMessage, setText] = useState('');
  const [messages, setMessages] = useState<newMessage[]>([]);
  const addMessageHandler = (ev: { preventDefault: () => void }) => {
    const newMessage = {
      id: nanoid(),
      name: NAME.USER,
      value: textMessage,
      timestamp: new Date(),
    };
    ev.preventDefault();
    setMessages([...messages, newMessage]);
  };
  const handleClickDelete = () => {
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
            id: nanoid(),
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
  const handleChangeText = (ev: React.ChangeEvent<HTMLInputElement>) => {
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
});
