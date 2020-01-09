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
      <div className="message-admin">
        <div className="message-admin__text">{text}</div>
        <div className="message-admin__time time">{date}</div>
      </div>
    );
  }

  return isSentByCurrentUser ? (
    <div className="message-me">
      <img
        className="message-me__avatar"
        src={`https://ui-avatars.com/api/?name=${user}&background=${color}&color=fff&rounded=true`}
        alt="avatar"
      />
      <div className="message-me__content">
        <div className="message-me__text text">{text}</div>
        <div className="message_other__time time">{date}</div>
      </div>
    </div>
  ) : (
    <div className="message-other">
      <img
        className="message-other__avatar"
        src={`https://ui-avatars.com/api/?name=${user}&background=${color}&color=fff&rounded=true`}
        alt="avatar"
      />
      <div className="message-other__content">
        <div className="message-other__text text">{text}</div>
        <div className="message_other__time time">{date}</div>
      </div>
    </div>
  );
};

export default Message;
