import React, { Component } from 'react';

export class InputText extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.changeText}
        value={this.props.value}
        placeholder="введите ваше сообщение"
      />
    );
  }
}
