const Router = require('express').Router();
const tx_pool = require('./transactions_pool.js');
const block_chain = require('./block_chain.js');

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

Router.get('/list-block', function(request, response) {
  response.json(block_chain);
});

module.exports = Router;
