const block_chain = require('./block_chain.js');
const tx_pool = require('./transactions_pool.js');

class Machine {
  start() {
    this.mineminemine = setInterval(() => {
      const totalTxCount = tx_pool.length;
      console.log('totalTxCount', totalTxCount);
      tx_pool.forEach((tx) => {
        block_chain.push(tx);
      })

      tx_pool.splice(0, totalTxCount);
      console.log('OwO done!');
    }, 10000);
  }

  stop() {
    clearInterval(this.mineminemine);
  }
}

const machine = new Machine();

module.exports = machine;
