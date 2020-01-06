import React from 'react';
import User from './User/User';

import './UserList.scss';

const UserList = ({ users }) => (
  <div className="user-list">
    <div className="user-list__count">
      <div>{users.length} users in this room</div>
    </div>
    <ul className="user-list__users">
      {users ? users.map((user, i) => <User key={i} {...user} />) : null}
    </ul>
  </div>
);

export default UserList;
