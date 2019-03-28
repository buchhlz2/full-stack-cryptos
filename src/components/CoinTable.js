import React, { Component } from 'react';
import CoinRow from './CoinRow';

class CoinTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];

    this.props.coins.forEach(coin => {
      rows.push(
        <CoinRow coin={coin} key={coin.id}/>
      );
    })

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Ticker</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default CoinTable;
