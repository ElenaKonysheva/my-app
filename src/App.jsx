import React, { Component } from 'react';
import { Messages } from './componentClass/Messages';
import { Header } from './componentClass/Header';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Messages />
      </>
    );
  }
}
