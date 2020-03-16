import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    cashMoney: 1000
  }

  onClickSubtract = (num) => {
    let newCashMoneyAmt = this.state.cashMoney - num;
    this.setState({cashMoney: newCashMoneyAmt})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer onClickSubtract={this.onClickSubtract}/>
        <Table cashMoney={this.state.cashMoney}/>
      </div>
    );
  }
}

export default App;