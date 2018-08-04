const Inventory = require('./inventory');

class Player {
  constructor() {
    this.inventory = new Inventory()
  }
}

module.exports = Player