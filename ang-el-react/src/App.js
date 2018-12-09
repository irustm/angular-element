import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.myName = 'Angular Fanatic';
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <avatar-lib name = {this.myName}></avatar-lib>
        </div>
      </div>
    );
  }
}

export default App;
