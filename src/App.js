import logo from './logo.svg';
import './App.css';

import Spending from './Spending/Spending.js';
import { Component } from 'react';

class App extends Component {
  state = {
    spendings: [
      { id: 1, category: 'Grocery', amount: 100, dateTime: '1/3/2021 10:52:38 PM', note: 'Bought for BirthDay party' },
      { id: 2, category: 'Carrier', amount: 100, dateTime: '1/3/2021 10:52:38 PM', note: '' },
      { id: 3, category: 'Transportation', amount: 150, dateTime: '1/3/2021 10:52:38 PM', note: '' }
    ],
    chartData: [1]
  }
  // it must be placed in the Spendings component; But there's a bug appeared in the chart Slice component
  static getDerivedStateFromProps(props, state){
    let amounts =  state.spendings.map(s => s.amount);
    return {chartData: amounts}
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div> Finance Trucker</div>
        </header>
        <Spending spendings = {this.state.spendings} chartData = {this.state.chartData}/>
      </div>
    );
  }
}

export default App;
