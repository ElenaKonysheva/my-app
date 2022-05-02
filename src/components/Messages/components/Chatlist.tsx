import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './Button/Button.css';
import { useDispatch, useSelector } from 'react-redux';
import { addChats, deleteChats } from '../../../store/chats/actions';
import { selectChatList } from '../../../store/chats/selectors';

export const Chatlist: FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const chatList = useSelector(selectChatList);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addChats(name));
    setName('');
  };
  return (
    <div className="container">
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>Chat name: {chat.name}</Link>
            <button onClick={() => dispatch(deleteChats(chat.name))}>x</button>
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
