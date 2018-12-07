describe('Tick', function() {
  var tick;

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
    tick = new Tick(board)
  })

  it("has initial state", function() {
    expect(tick.board.cells.length).toEqual(9)
  })

  it("keeps a cell alive if it has 2 to 3 live neighbours", function() {
    expect(tick.inspect(cell2)).toEqual(1)
  })

  it("kills a cell if it has fewer than 2 live neighbours", function() {
    expect(tick.inspect(cell1)).toEqual(0)
  })

  it("kills a cell if it has more than 3 live neighbours", function() {
    expect(tick.inspect(cell6)).toEqual(0)
  })

  it("turns a cell alive if it has 3 live neighbours", function() {
    expect(tick.inspect(cell4)).toEqual(1)
  })

  it("can stage all changes", function() {
    tick.stageChanges()
    expect(tick.newStates).toEqual([0, 1, 1, 1, 0, 0, 0, 1, 1])
  })

})
