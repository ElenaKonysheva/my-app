import React, { FC, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultContext, ThemeContext } from './components/utils/ThemeContext';
import { Header } from './components/Header';
import { Chatlist } from './components/Messages/components/Chatlist';

const Chats = React.lazy(() =>
  import('./pages/Chats/Chats').then((module) => ({
    default: module.Chats,
  }))
);
const Home = React.lazy(() =>
  import('./pages/Home').then((module) => ({
    default: module.Home,
  }))
);
const Profile = React.lazy(() =>
  import('./pages/Profile').then((module) => ({
    default: module.Profile,
  }))
);
import './App.scss';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Suspense fallback={<div>Загрузка...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route index element={<Chatlist />} />
                <Route path=":chatId" element={<Chats />} />
              </Route>
            </Route>
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeContext.Provider>
  );
};
