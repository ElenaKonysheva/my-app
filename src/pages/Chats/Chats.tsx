import React, { FC, useState, useEffect } from 'react';
import { Button } from '../../components/Messages/components/Button';
import { Chatlist } from '../../components/Messages/components/Chatlist';
import { InputText } from '../../components/Messages/components/InputText';
import { MessageList } from '../../components/Messages/components/MessageList';
import { Navigate, useParams } from 'react-router-dom';
import { withClasses } from '../../HOC/withclasses';
import style from './chats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatList, selectChats } from '../../store/chats/selectors';
import { addMessageHandler } from '../../store/chats/actions';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const MessageListWithClasses = withClasses(MessageList);
  const chats = useSelector(selectChats);
  const chatList = useSelector(selectChatList);
  // useEffect(() => {
  //   if (
  //     chatId &&
  //     chats[chatId]?.length > 0 &&
  //     chats[chatId][chats[chatId].length - 1].name !== NAME.BOT
  // ) {
  //   const timeout = setTimeout(() => {
  //     setMessages({
  //       ...messages,
  //       [chatId]: [
  //         ...messages[chatId],
  //         {
  //           id: nanoid(),
  //           name: NAME.BOT,
  //           value: 'hi how i can help you',
  //           timestamp: new Date(),
  //         },
  //       ],
  //     });
  //   }, 1500);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }
  // }, [chatId, messages, setMessages]);
  const [textMessage, setText] = useState('');
  const handleClickDelete = () => {
    setText('');
  };
  const addMessage = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(addMessageHandler(chatId, newMessage));
    }
  };

  const handleChangeText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };
  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }
  return (
    <div className="container">
      <Chatlist />
      <form action="#" onSubmit={addMessage}>
        <InputText value={textMessage} changeText={handleChangeText} />
        <MessageListWithClasses
          messages={chatId ? chats[chatId] : []}
          classes={style.background}
        />
        <Button clickDelete={handleClickDelete} disabled={!textMessage} />
      </form>
    </div>
  );
};
