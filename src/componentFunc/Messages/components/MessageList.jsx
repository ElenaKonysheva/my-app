import React from 'react';
export const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map(({ id, value, name, timestamp }, idx) => (
        <div className="message" key={id}>
          <p>Message # {idx + 1}</p>
          <h2>From: {name}</h2>
          <p> Message text: {value}</p>
          <p>Message time: {timestamp.toLocaleTimeString()}</p>
        </div>
      ))}
    </div>
  );
};
