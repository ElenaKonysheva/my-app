import React from 'react';
import chatIcon from './assets/chatIcon.png';

export const Header = () => {
  return (
    <header>
      <div className="container header">
        <img src={chatIcon} />
        <h1>my-app</h1>
      </div>
    </header>
  );
};
