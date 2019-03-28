import React, { Component } from 'react';

export default class CoinRow extends React.Component {
  render() {
    const coin = this.props.coin;
    // basic structure for a row -- the coin's name, symbol, price, etc.
    return (
      <tr>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td>
        <td>{coin.quote.USD.price}</td>
      </tr>
    );
  }
}
