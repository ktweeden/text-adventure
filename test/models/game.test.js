const Game = require('../../app/models/game')

describe('When a game is initialised', () => {
  let game
  beforeAll(() => {
    game = new Game()
  })

  test('it has rooms', () => {
    expect(game.rooms).toEqual([])
  })

  test('it hase a player', () => {
    expect(game.player).toEqual("player")
  })
})