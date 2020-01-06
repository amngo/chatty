import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import UserList from '../UserList/UserList';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';

import './Chat.scss';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [color, setColor] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  // const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room, color } = queryString.parse(location.search);

    socket = io();

    setRoom(room);
    setName(name);
    setColor(color);

    socket.emit('join', { name, room, color }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="chat-container">
      <UserList users={users} />
      <div className="chat">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>  
    </div>
  );
};

export default Chat;
