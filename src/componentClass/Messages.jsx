import React, { Component } from 'react';
import { InputText } from './InputText';
import { Button } from './Button';
import { CheckedForm } from './CheckedForm';

export class Messages extends Component {
  state = {
    messages: [],
    value: '',
  };

  handleClickShow = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
  };

  handleClickDelete = () => {
    this.setState({ value: '' });
  };

  handleChangeText = (ev) => {
    this.setState({ value: ev.target.value });
  };
  render() {
    return (
      <>
        <div className="container">
          <CheckedForm />
          <p>Почему вы ее любите</p>
          <ul className="message">
            {this.state.messages.map((message) => (
              // eslint-disable-next-line react/jsx-key
              <li>{message}</li>
            ))}
          </ul>
          <InputText
            value={this.state.value}
            changeText={this.handleChangeText}
          />
          <Button
            click={this.handleClickShow}
            clickDelete={this.handleClickDelete}
          />
        </div>
      </>
    );
  }
}
