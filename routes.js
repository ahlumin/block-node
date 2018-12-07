const Router = require('express').Router();
const tx_pool = require('./transactions_pool.js');

Router.post('/send-tx', function(request, response) {
  const {
    from,
    to,
    value,
  } = request.body;


  tx_pool.push({
    from,
    to,
    value,
  });

  response.json({ message: 'successfully, transaction pending...'});
});

Router.get('/list-tx', function(request, response) {
  response.json(tx_pool);
});

module.exports = Router;
