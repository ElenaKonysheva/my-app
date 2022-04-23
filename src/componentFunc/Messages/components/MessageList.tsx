import React, { FC } from 'react';

interface newMessage {
  id: string;
  name: string;
  value: string;
  timestamp: Date;
}

interface MessageListprops {
  messages: newMessage[];
}
export const MessageList: FC<MessageListprops> = ({ messages }) => {
  return (
    <div>
      {messages.map((newMessage, idx) => (
        <div className="message" key={newMessage.id}>
          <p>Message # {idx + 1}</p>
          <h2>From: {newMessage.name}</h2>
          <p> Message text: {newMessage.value}</p>
          <p>Message time: {newMessage.timestamp.toLocaleTimeString()}</p>
        </div>
      ))}
    </div>
  );
};
