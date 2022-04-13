import React, { useState } from 'react';

export const CheckedForm = () => {
  const [value, chooseValue] = useState('jazz');
  const handleChange = (ev) => {
    chooseValue(ev.target.value);
  };
  const handleSubmit = (ev) => {
    alert('Ваша любимая музыка: ' + value);
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p> Выберите вашу любимую музыку:</p>
        <br />
        <select value={value} onChange={handleChange}>
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
};
