import React from 'react';
import User from './User/User';

import './UserList.scss';
import SearchBar from '../SearchBar/SearchBar';

const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      <div className="user-list__search">
        <SearchBar />
      </div>
      <ul className="user-list__users">
        {users
          ? users.map((user, i) => <User key={i} {...user} />)
          : null}
      </ul>
    </ul>
  );
};

export default UserList;
