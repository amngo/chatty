import React from 'react';
import { withRouter } from 'react-router-dom';

import './InfoBar.scss';

const InfoBar = ({ room, history, disconnectSocket }) => (
  <div className="info-bar">
    <div className="info-bar__room-name">{room}</div>
    <div className="info-bar__btn-group">
      <button
        className="info-bar__btn info-bar__btn--invite"
        onClick={() => window.open(`/?room=${room}`, '_blank')}
      >
        Invite People<i className="fas fa-user-plus"></i>
      </button>
      <button
        className="info-bar__btn info-bar__btn--leave"
        onClick={() => {
          disconnectSocket();
          history.push('/');
        }}
      >
        Leave Room
      </button>
    </div>
  </div>
);

export default withRouter(InfoBar);
