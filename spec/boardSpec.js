describe('Board', function() {
  var board;

  beforeEach(function() {
    function mockCell(x, y, state) {
      this.x = x
      this.y = y
      this.state = state
    }
    board2by3 = new Board(2, 3, mockCell)
    board5by5 = new Board(5, 5, mockCell)
    board3by3 = new Board(3, 3, mockCell)
    cell1 = new mockCell(1, 1, 1)
    cell2 = new mockCell(2, 1, 1)
    cell3 = new mockCell(3, 1, 0)
    cell4 = new mockCell(1, 2, 1)
    cell5 = new mockCell(2, 2, 0)
    cell6 = new mockCell(3, 2, 1)
    cell7 = new mockCell(1, 3, 0)
    cell8 = new mockCell(2, 3, 0)
    cell9 = new mockCell(3, 3, 1)
    board3by3 = new Board(3, 3, mockCell)
    board3by3.cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
  })

  it("can have dimensions", function() {
    expect(board2by3.x).toEqual(2)
    expect(board2by3.y).toEqual(3)
  })

  it("has cells", function() {
    expect(board2by3.cells.length).toEqual(6)
  })

  it("can set its initial state \
  with some live and some dead cells", function() {
    expect(board5by5.cells.filter(obj => obj.state).length).not.toEqual(0)
  })

  it("knows how many live neighbours a cell has", function() {
    expect(board3by3.liveNeighbours(cell5)).toEqual(5)
  })

  it("knows how many live neighbours a corner cell has", function() {
    expect(board3by3.liveNeighbours(cell1)).toEqual(2)
    expect(board3by3.liveNeighbours(cell3)).toEqual(2)
    expect(board3by3.liveNeighbours(cell7)).toEqual(1)
    expect(board3by3.liveNeighbours(cell9)).toEqual(1)
  })

  it("knows how many live neighbours a side cell has", function() {
    expect(board3by3.liveNeighbours(cell2)).toEqual(3)
    expect(board3by3.liveNeighbours(cell6)).toEqual(2)
    expect(board3by3.liveNeighbours(cell8)).toEqual(3)
    expect(board3by3.liveNeighbours(cell4)).toEqual(2)
  })
})
