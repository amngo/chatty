import React from 'react';

import './Input.scss';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="chat-form">
    <textarea
      className="chat-form__input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
  </form>
);

export default Input;
