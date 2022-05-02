import { ADD_CHATS, DELETE_CHATS, ADD_MESSAGEHANDLER } from './actions';
import { Reducer } from 'redux';
import { ChatsActions } from './types';
import { nanoid } from 'nanoid';
import { NAME } from '../../constans';

export interface newMessage {
  id: string;
  name: string;
  value: string;
  timestamp: Date;
}
export interface ChatsState {
  [key: string]: newMessage[];
}
const initialState: ChatsState = {
  gb: [{ id: '1', name: NAME.USER, value: 'hello', timestamp: new Date() }],
};
export const chatReducer: Reducer<ChatsState, ChatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHATS: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case DELETE_CHATS: {
      const chats = { ...state };
      delete chats[action.chatId];
      return {
        ...state,
      };
    }
    case ADD_MESSAGEHANDLER: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            name: NAME.USER,
            value: action.newMessage,
            timestamp: new Date(),
          },
        ],
      };
    }
    default:
      return state;
  }
};
