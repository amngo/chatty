import React from 'react';

import './Message.scss';

const Message = ({ message: { text, user, date, color }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user.toLowerCase() === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (user.toLowerCase() === 'admin') {
    return (
      <div>
        <div className="message-admin">
          <span className="message-admin__time time">{date}</span>
        </div>
        <div className="message-admin__text text">{text}</div>
      </div>
    );
  }

  return isSentByCurrentUser ? (
    <div className="message-me">
      <div className="message-me__data">
        <span className="message-me__time time">{date}</span> &nbsp; &nbsp;
        <span className="message-me__name name">Me</span>
      </div>
      <div className="message-me__text text">{text}</div>
    </div>
  ) : (
    <div className="message-other">
      <img
        className="message-other__avatar"
        src={`https://ui-avatars.com/api/?name=${user}&background=${color}&color=fff&rounded=true`}
        alt="avatar"
      />
      <div className="message-other__content">
        <div className="message-other__data">
          <span className="message-other__name name">{user}</span>
          <span className="message-other__time time ml-1">{date}</span>
        </div>
        <div className="message_other__text text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Message;
