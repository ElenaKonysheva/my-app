import React, { FC, useState, useEffect } from 'react';
import { Chat, Messages } from '../App';
import { Button } from '../componentFunc/Messages/components/Button';
import { Chatlist } from '../componentFunc/Messages/components/Chatlist';
import { InputText } from '../componentFunc/Messages/components/InputText';
import { MessageList } from '../componentFunc/Messages/components/MessageList';
import { nanoid } from 'nanoid';
import { NAME } from '../constans';
import { Navigate, useParams } from 'react-router-dom';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: Chat[];
  addChat: (chats: Chat) => void;
  deleteChat: (chatName: string) => void;
}
export const Chats: FC<ChatsProps> = ({
  messages,
  chatList,
  setMessages,
  addChat,
  deleteChat,
}) => {
  const { chatId } = useParams();
  console.log('chatId', chatId);
  const [textMessage, setText] = useState('');
  const addMessageHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    const newMessage = {
      id: nanoid(),
      name: NAME.USER,
      value: textMessage,
      timestamp: new Date(),
    };
    ev.preventDefault();
    if (chatId) {
      setMessages({
        ...messages,
        [chatId]: [...messages[chatId], newMessage],
      });
    }
  };

  const handleClickDelete = () => {
    setText('');
  };
  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].name !== NAME.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              name: NAME.BOT,
              value: 'hi how i can help you',
              timestamp: new Date(),
            },
          ],
        });
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);
  const handleChangeText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };
  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }
  return (
    <div className="container">
      <Chatlist chatList={chatList} addChat={addChat} deleteChat={deleteChat} />
      <form action="#" onSubmit={addMessageHandler}>
        <InputText value={textMessage} changeText={handleChangeText} />
        <MessageList messages={chatId ? messages[chatId] : []} />
        <Button clickDelete={handleClickDelete} disabled={!textMessage} />
      </form>
    </div>
  );
};
