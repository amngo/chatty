import React from 'react';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import './App.scss';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </div>
  );
};

export default App;
