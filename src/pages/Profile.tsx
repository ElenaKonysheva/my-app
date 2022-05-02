import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../components/utils/ThemeContext';
import { changeName, toggleProfile } from '../store/profile/actions';
import { selectName, selectVisible } from '../store/profile/selectors';
export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const name = useSelector(selectVisible);
  const visible = useSelector(selectName);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'light' ? 'like' : 'dislike'}</p>
        <button onClick={toggleTheme}>
          {theme !== 'light' ? ' like' : ' dislike'}
        </button>
      </div>
      <div>
        <p> {name}</p>
        <input type="checkbox" checked={!visible} />
        <button onClick={() => dispatch(toggleProfile())}>
          change visible
        </button>
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
