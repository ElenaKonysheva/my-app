import { AddChats, AddMessageHandler, DeleteChats } from './types';

export const ADD_CHATS = 'CHATS::ADD_CHATS';
export const DELETE_CHATS = 'CHATS::DELETE_CHATS';
export const ADD_MESSAGEHANDLER = 'CHATS::ADD_MESSAGEHANDLER';

export const addChats: AddChats = (chatName) => ({
  type: ADD_CHATS,
  chatName,
});
export const deleteChats: DeleteChats = (chatId) => ({
  type: DELETE_CHATS,
  chatId,
});
export const addMessageHandler: AddMessageHandler = (chatId, newMessage) => ({
  type: ADD_MESSAGEHANDLER,
  chatId,
  newMessage,
});
