import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import chatIcon from './assets/chatIcon.png';

const menu = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
];
export const Header: FC = () => {
  return (
    <header>
      <div className="container header">
        <ul>
          <h2> Menu</h2>
          {menu.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? 'white' : 'blue',
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <img src={chatIcon} />
        <h1>my-app</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </header>
  );
};
