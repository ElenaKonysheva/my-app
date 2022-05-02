import { ADD_CHATS, ADD_MESSAGEHANDLER, DELETE_CHATS } from './actions';

export type ChatsActions =
  | ReturnType<AddChats>
  | ReturnType<DeleteChats>
  | ReturnType<AddMessageHandler>;
export interface Chat {
  id: string;
  name: string;
}
export type AddChats = (chatName: string) => {
  type: typeof ADD_CHATS;
  chatName: string;
};
export type DeleteChats = (chatId: string) => {
  type: typeof DELETE_CHATS;
  chatId: string;
};
export type AddMessageHandler = (
  chatId: string,
  newMessage: string
) => {
  type: typeof ADD_MESSAGEHANDLER;
  chatId: string;
  newMessage: string;
};
