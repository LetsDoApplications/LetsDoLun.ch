import React, { Component } from 'react';
import logo from './logo.svg';
import Voting from './components/voting/Voting'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Voting/>
      </div>
    );
  }
}

export default App;
