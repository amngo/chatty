import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { withRouter } from 'react-router-dom';

import UserList from '../UserList/UserList';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';
import Transition from '../Transition/Transition';

import './Chat.scss';

let socket;

const Chat = ({ location, history }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [color, setColor] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room, color } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    setColor(color);

    socket.emit('join', { name, room, color }, error => {
      if (error) {
        alert(error);
        history.push('/');
      }
    });

    // return () => disconnectSocket(socket);
  }, [location.search, history]);

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

  const disconnectSocket = socket => {
    socket.emit('disconnect');
    socket.close();
  };

  return (
    <Transition show={true}>
      <div className="chat-container">
        <UserList users={users} />
        <div className="chat">
          <InfoBar
            room={room}
            disconnectSocket={() => disconnectSocket(socket)}
          />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </Transition>
  );
};

export default withRouter(Chat);
