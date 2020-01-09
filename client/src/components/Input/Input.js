import React from 'react';

import './Input.scss';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="chat-form">
    <input
      className="chat-form__input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button className="chat-form__send" onClick={event => sendMessage(event)}>
      <i className="chat-form__send-icon fas fa-paper-plane"></i>
    </button>
  </form>
);

export default Input;
