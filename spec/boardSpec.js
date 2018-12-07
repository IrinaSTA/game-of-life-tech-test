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
})
