const Player = require('../app/models/player');
const Inventory = require('../app/models/inventory');

describe('When a player is initialised', () => {
  let player
  beforeAll(() => {
    player = new Player()
  })

  test('it has an Inventory', () => {
    expect(player.inventory).toBeInstanceOf(Inventory)
  })
})