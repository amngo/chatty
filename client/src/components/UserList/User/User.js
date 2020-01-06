import React from 'react';

import './User.scss';

const User = ({ name, color }) => {
  return (
    <li className="user">
      <img
        className="user__avatar"
        src={`https://ui-avatars.com/api/?name=${name}&background=${color}&color=fff&rounded=true`}
        alt="avatar"
      />
      <div className="user__info">
        <div className="user__name">{name}</div>
        <div className="user__status">
          <i className="fa fa-circle user__online"></i> online
        </div>
      </div>
    </li>
  );
};

export default User;
