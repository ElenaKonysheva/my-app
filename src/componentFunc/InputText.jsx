import React from 'react';

export const InputText = (props) => {
    return <input type='text' onChange={props.changeText} value={props.value}
        placeholder='введите ваше сообщение' />
}


