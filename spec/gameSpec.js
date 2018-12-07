describe("Game", function() {
  var game;

  beforeEach(function() {
    function mockCell(x, y, state) {
      this.x = x
      this.y = y
      this.state = state
    }
    cell1 = new mockCell(1, 1, 1)
    cell2 = new mockCell(2, 1, 1)
    cell3 = new mockCell(3, 1, 1)
    cell4 = new mockCell(1, 2, 0)
    cell5 = new mockCell(2, 2, 0)
    cell6 = new mockCell(3, 2, 1)
    cell7 = new mockCell(1, 3, 0)
    cell8 = new mockCell(2, 3, 1)
    cell9 = new mockCell(3, 3, 1)
    board = new Board(3, 3, mockCell)
    board.cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
  })

  it("can be played for a certain number of ticks", function() {
    function mockCell(x, y, state) {
      this.x = x
      this.y = y
      this.state = state
    }
    game = new Game(3, 3, 3)
    game.board = board
    game.play()
    expect(game.board.cells[0].state).toEqual(0)
    expect(game.board.cells[1].state).toEqual(0)
    expect(game.board.cells[2].state).toEqual(0)
    expect(game.board.cells[3].state).toEqual(1)
    expect(game.board.cells[4].state).toEqual(1)
    expect(game.board.cells[5].state).toEqual(0)
    expect(game.board.cells[6].state).toEqual(0)
    expect(game.board.cells[7].state).toEqual(0)
    expect(game.board.cells[8].state).toEqual(0)
  })
})
