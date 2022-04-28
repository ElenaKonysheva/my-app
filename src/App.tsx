import { Chat } from '@mui/icons-material';
import { nanoid } from 'nanoid';
import React, { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './componentFunc/Header';
import { Chatlist } from './componentFunc/Messages/components/Chatlist';
import { NAME } from './constans';
import { Chats } from './pages/Chats';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
export interface Chat {
  id: string;
  name: string;
}
const initialMessage: Messages = {
  default: [
    {
      id: '1',
      name: NAME.USER,
      value: 'hello',
      timestamp: new Date(),
    },
  ],
};
export interface newMessage {
  id: string;
  name: string;
  value: string;
  timestamp: Date;
}

export interface Messages {
  [key: string]: newMessage[];
}
export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessage);
  const chatList = useMemo(() => {
    return Object.entries(messages).map((item) => ({
      id: nanoid(),
      name: item[0],
    }));
  }, [Object.entries(messages).length]);
  const addChat = (chat: Chat) => {
    if (!messages[chat.name]) {
      setMessages({
        ...messages,
        [chat.name]: [],
      });
    } else {
      alert('такой чат уже существует');
    }
  };
  const deleteChat = (chatName: string) => {
    const newMessages = { ...messages };
    delete newMessages[chatName];
    setMessages({
      ...newMessages,
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={
                <Chatlist
                  chatList={chatList}
                  addChat={addChat}
                  deleteChat={deleteChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  chatList={chatList}
                  addChat={addChat}
                  deleteChat={deleteChat}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
