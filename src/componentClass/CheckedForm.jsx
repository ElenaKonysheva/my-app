import React, { Component } from 'react';

export class CheckedForm extends Component {
  state = {
    value: 'jazz',
  };
  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };
  handleSubmit = (ev) => {
    alert('Ваша любимая музыка: ' + this.state.value);
    ev.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p> Выберите вашу любимую музыку:</p>
          <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="jazz">Jazz</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="classic">Classic</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit">отправить</button>
      </form>
    );
  }
}
