import React from 'react';
import { Messages } from './componentFunc/Messages';
import { Header } from './componentFunc/Header';
import './App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Messages />
    </>
  );
};
