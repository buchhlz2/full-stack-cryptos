// static, skinnied down schema from CoinMarketCap API endpoint: https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
// https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsHistorical
const COINDATA = {
  "data": [{
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "quote": {
      "USD": {
        "price": 4018.23
      }
    }
  },
  {
    "id": 2,
    "name": "Ethereum",
    "symbol": "ETH",
    "quote": {
      "USD": {
        "price": 138.82
      }
    }
  },
  {
    "id": 3,
    "name": "Ripple",
    "symbol": "XRP",
    "quote": {
      "USD": {
        "price": 0.31
      }
    }
  }]
};

export default COINDATA;
