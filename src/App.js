import React, { Component } from 'react';
import CoinTable from './components/CoinTable';
import COINDATA from './util/COINDATA';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: []
    }
  }

  componentDidMount() {
    this.setState({coinData: [...COINDATA.data]})
  }

  render() {
    return (
      <div className="container">
        <h1>Coin List</h1>
        <CoinTable coins={this.state.coinData}/>
      </div>
    );
  }
}

export default App;
