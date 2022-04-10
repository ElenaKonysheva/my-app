import React, { Component } from 'react';
import { Messages } from './componentFunc/Messages';
import { Header } from './componentFunc/Header';
import './App.scss';

export class App extends Component {
  render() {
    return <>
      <Header />
      <Messages />
    </>
  }
}

