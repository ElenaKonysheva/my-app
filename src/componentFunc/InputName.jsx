import React from 'react';
export const InputName = (props) => {

    return <input type='text' onChange={props.changeName} value={props.name}
        placeholder='введите ваше имя' />
}