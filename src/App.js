import React, { Component } from 'react';
import CoinTable from './components/CoinTable';
import SearchBar from './components/SearchBar';
import COINDATA from './util/COINDATA';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // set state with coinData (to eventually call an API) and the searcbar text
    this.state = {
      coinData: [],
      searchText: ''
    }

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  //handle the searched text and update based on value
  handleSearchTextChange(searchText) {
    this.setState({searchText: searchText})
  }
  // once the component mounts, loads a default page of coins before searching
  componentDidMount() {
    this.setState({coinData: [...COINDATA.data]})
  }

  render() {
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
