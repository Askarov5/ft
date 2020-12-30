import logo from './logo.svg';
import './App.css';

import Spending from './Spending/Spending.js';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div> Finance Trucker</div>
        </header>
        <Spending/>
      </div>
    );
  }
}

export default App;
