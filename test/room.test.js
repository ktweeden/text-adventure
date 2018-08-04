const Room = require('../app/models/room');

describe('When a room is initialised', () => {
  let room
  beforeAll(() => {
    room = new Room("A room")
  })

  test('it has a description', () => {
    expect(room.description).toEqual("A room")
  })
})