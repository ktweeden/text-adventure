const Inventory = require('../app/models/inventory');

describe('When an inventory is initialised', () => {
  let inventory
  
  beforeAll(() => {
    inventory = new Inventory()
  })

  test('it has no items', () => {
    expect(inventory.items).toEqual([])
  })
})