import React from 'react';
export const Button = (props) => {
    return <>
        <button onClick={props.click}>показать</button>
        <button onClick={props.clickDelete}>очистить</button>
    </>
}
