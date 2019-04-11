import React, { Component } from 'react';
import CoinRow from './CoinRow';

export default class CoinTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // initialize an empty array of row values and the searchText passed from SearchBar and App.js
    const rows = [];
    const searchText = this.props.searchText.toLowerCase();
    // for each coin in the rows array, check if the coin met the name or ticker search criteria
    // if yes, then add the CoinRow for rendering, else, ignore
    // (logic can be cleaned up)
    if(this.props.coins !== undefined) {
      this.props.coins.forEach(coin => {
        let coinMetSearchCriteria = false;
        if (!(coin.name.toLowerCase().indexOf(searchText) === -1)) {
          coinMetSearchCriteria = true;
        }
        if (coinMetSearchCriteria === false) {
          if(!(coin.symbol.toLowerCase().indexOf(searchText) === -1)) {
            coinMetSearchCriteria = true;
          }
        }

        if (coinMetSearchCriteria === true) {
          rows.push(
            <CoinRow coin={coin} key={coin.id}/>
          );
        }
      })
    }
    // once rows is finalized, pass the rows to the table
    return (
      <table className="table table-dark table-hover table-sm">
        <thead>
          <tr>
            <th scope="col-md-3">Name</th>
            <th scope="col-md-3">Ticker</th>
            <th scope="col-md-3">Price (USD)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
