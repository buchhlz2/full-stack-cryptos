const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const rp = require('request-promise');
const cors = require('cors');

const API_KEY = '460b6c94-abc5-4b18-89ce-e458ca3fccfc';
const baseURL = 'https://pro-api.coinmarketcap.com'
const latestCoinsURL = '/v1/cryptocurrency/listings/latest'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

const requestOptions = {
  method: 'GET',
  uri: `${baseURL}${latestCoinsURL}`,
  qs: {
    start: 1,
    limit: 25,
    convert: 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': API_KEY
  },
  json: true,
  gzip: true
};

const latestCoins = rp(requestOptions).then((res) => {
  console.log('Server API call response:', res);
  return res;
}).catch((err) => {
  console.log('Server API call error:', err.message);
});


router.get('/latestCoins', (req, res) => {
  return res.status(200).send({
    success: 'true',
    message: 'coin retrieved successfully',
    body: latestCoins
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
