import React, { Component } from 'react';

export class InputName extends Component {

    render() {
        return <input type='text' onChange={this.props.changeName} value={this.props.name}
            placeholder='введите ваше имя' />

    }

}