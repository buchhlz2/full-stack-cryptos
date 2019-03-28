import React, { Component } from 'react';

class CoinRow extends React.Component {
  render() {
    const coin = this.props.coin;

    return (
      <tr>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td>
        <td>{coin.quote.USD.price}</td>
      </tr>
    );
  }
}

export default CoinRow;
