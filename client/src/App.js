import React, { Component } from 'react';
import CoinTable from './components/CoinTable';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // set state with coinData (to eventually call an API) and the searcbar text
    this.state = {
      coinData: [],
      searchText: '',
      loadingCoinData: true
    }

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  //handle the searched text and update based on value
  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText,
      loadingCoinData: false
    })
  }
  //get the latest coins from the Express server at localhost:5000
  async getLatestCoins() {
    let res = await axios({
      method: 'get',
      url: 'http://localhost:5000/api/latestCoins',
      timeout: 8000
    });
    let { data } = await res;
    let coin = data.body.fulfillmentValue.data;
    console.log(coin);
    this.setState({coinData: coin});
  }
  // once the component mounts, loads a default page of coins before searching
  componentDidMount() {
    this.getLatestCoins();
  }

  render() {
    if (this.props.loading) {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />
      );
    }
    return (
      <div className="container">
        <h1>Cryptocurrency Analysis</h1>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange}/>
        <CoinTable coins={this.state.coinData} searchText={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
