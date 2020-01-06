import React from 'react';

import './InfoBar.scss';

const InfoBar = ({ room }) => (
  <div className="info-bar">
    <div className="info-bar__room-name">{room}</div>
    <button className="info-bar__invite-btn" onClick={() => window.open(`http://localhost:3000/?room=${room}`, '_blank')}>
      Invite People<i className="fas fa-user-plus"></i>
    </button>
  </div>
);

export default InfoBar;
