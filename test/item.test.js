const Item = require('../app/models/item');

describe('When an item is initialised', () => {
  let item
  
  beforeAll(() => {
    item = new Item("An item")
  })

  test('it has a description', () => {
    expect(item.description).toBe("An item")
  })
})