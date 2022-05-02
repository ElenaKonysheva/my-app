import { nanoid } from 'nanoid';
import { StoreState } from '..';

export const selectChats = (state: StoreState) => state.chats;
export const selectChatList = (state: StoreState) =>
  Object.entries(state.chats).map((item) => ({
    id: nanoid(),
    name: item[0],
  }));
