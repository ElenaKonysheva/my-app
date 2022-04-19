import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.click}>показать</button>
        <button onClick={this.props.clickDelete}>очистить</button>
      </>
    );
  }
}
