import React, { useEffect, useRef } from 'react';
import Message from './Message/Message';

import './Messages.scss';

const Messages = ({ messages, name }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="message-history">
      <ul className="message-history__messages">
        {messages.map((message, i) => (
          <li key={i} className="message-history__message">
            <Message message={message} name={name} />
          </li>
        ))}
        <div ref={messagesEndRef} />
      </ul>
    </div>
  );
};

export default Messages;
