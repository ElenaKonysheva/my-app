import React, { useState, memo } from 'react';
import style from './Button/Button.module.css';
import { nanoid } from 'nanoid';

interface newChat {
  id: string;
  value: string;
}

export const Chatlist = memo(() => {
  const [nameChat, setName] = useState('');
  const [chats, setChats] = useState<newChat[]>([]);
  const addChatHandler = (ev: { preventDefault: () => void }) => {
    const newChat = {
      id: nanoid(),
      value: nameChat,
    };
    ev.preventDefault();
    setChats([...chats, newChat]);
  };
  const handleClickDelete = () => {
    setName('');
  };
  const handleChangeChatName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  return (
    <div>
      <input
        value={nameChat}
        onChange={handleChangeChatName}
        onFocus={(event) => console.log(event)}
      />
      <br />
      <form action="#" onSubmit={addChatHandler}>
        <ul>
          {chats.map((newChat, idx) => (
            <li key={newChat.id}>
              Chat # {idx + 1} Chat name: {newChat.value}
            </li>
          ))}
        </ul>
        <button type="submit" className={style.button} disabled={!nameChat}>
          отправить список чатов
        </button>
        <button
          onClick={handleClickDelete}
          type="reset"
          className={style.button}
        >
          очистить список чатов
        </button>
      </form>
    </div>
  );
});
