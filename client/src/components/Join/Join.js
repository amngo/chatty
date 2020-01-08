import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';
import queryString from 'query-string';
import Transition from '../Transition/Transition';

import './Join.scss';

const SignIn = ({ location }) => {
  const [invited, setInvited] = useState(false);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [submit, setSubmit] = useState(false);
  const [shake, setShake] = useState(false);
  const [color, setColor] = useState('03a9f4');

  useEffect(() => {
    const { room: roomName } = queryString.parse(location.search);
    if (roomName) {
      setRoom(roomName);
      setInvited(true);
    }
  }, [location.search]);

  const handleColor = color => setColor(color.hex.slice(1));

  return (
    <Transition
      show={!submit}
      url={`/chat?name=${name}&room=${room}&color=${color}`}
    >
      <div
        className="join"
        style={shake ? { animation: 'shake 0.5s' } : {}}
        onAnimationEnd={() => setShake(false)}
      >
        <div className="join__form">
          {invited ? (
            <h2 className="join__message">
              You are invited to join {`"${room}"`}.
            </h2>
          ) : (
            <h2 className="join__message">Create a room to get started. </h2>
          )}

          <input
            placeholder="Your name"
            className="join__input"
            type="text"
            onChange={event => setName(event.target.value)}
          />

          {!invited && (
            <input
              placeholder="Room name"
              className="join__input"
              type="text"
              onChange={event => setRoom(event.target.value)}
            />
          )}

          <button
            onClick={e => (!name || !room ? setShake(true) : setSubmit(true))}
            className="join__btn"
            type="submit"
          >
            {invited ? 'Enter' : 'Create Room'}
          </button>
        </div>

        <div className="join__color-picker">
          <img
            className="join__avatar"
            src={`https://ui-avatars.com/api/?name=${name}&background=${color}&color=fff&rounded=true`}
            alt="avatar"
          />
          <CirclePicker color={color} onChangeComplete={handleColor} />
        </div>
      </div>
    </Transition>
  );
};

export default SignIn;
