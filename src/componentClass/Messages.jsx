import React, { Component } from 'react';
import { InputText } from './InputText';
import { InputName } from './InputName';
import { Button } from './Button';
import { CheckedForm } from './Check';

export class Messages extends Component {
    state = {
        messages: '',
        value: '',
        name: ''
    }

    handleClickShow = () => {
        this.setState({ messages: this.state.value })

    }

    handleClickDelete = () => {
        this.setState({ value: '' })
        this.setState({ name: '' })
        this.setState({ messages: '' })
    }

    handleChangeText = (ev) => {
        this.setState({ value: ev.target.value })

    }
    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })

    }

    render() {
        return <div className='container'>
            <CheckedForm />
            <p>Почему вы ее любите</p>
            <InputName changeName={this.handleChangeName} name={this.state.name} />
            <InputText value={this.state.value} changeText={this.handleChangeText} />
            <br />
            <Button click={this.handleClickShow} clickDelete={this.handleClickDelete} />
            <p>Сообщение от {this.state.name}</p>
            <div className='message'>{this.state.messages}</div>
        </div>
    }
}
