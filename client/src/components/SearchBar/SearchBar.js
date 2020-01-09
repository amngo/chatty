import React from 'react';

import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <i className="search-bar__icon fas fa-search"></i>
      <input
        className="search-bar__input"
        type="text"
        name=""
        placeholder="Search for users..."
      />
    </div>
  );
};

export default SearchBar;
