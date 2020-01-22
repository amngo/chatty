import React from 'react';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import { Route } from 'react-router-dom';

import 'animate.css/animate.min.css';
import './App.scss';
import GithubRibbon from './components/GithubRibbon/GithubRibbon';

const App = () => {
  return (
    <div className="container">
      <GithubRibbon />
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </div>
  );
};

export default App;
