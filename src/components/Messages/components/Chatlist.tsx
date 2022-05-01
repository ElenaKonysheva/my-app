import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import './Button/Button.css';
import { Chat } from '../../../App';
interface ChatlistProps {
  chatList: Chat[];
  addChat: (chats: Chat) => void;
  deleteChat: (chat: string) => void;
}

export const Chatlist: FC<ChatlistProps> = ({
  chatList,
  addChat,
  deleteChat,
}) => {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addChat({
      id: nanoid(),
      name,
    });
    setName('');
  };
  return (
    <div className="container">
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>Chat name: {chat.name}</Link>
            <button onClick={() => deleteChat(chat.name)}>x</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit" disabled={!name}>
          добавить чат
        </button>
      </form>
    </div>
  );
};
