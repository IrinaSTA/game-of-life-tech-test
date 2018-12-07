describe('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board(2, 3)
  })

  it("can have dimensions", function() {
    expect(board.x).toEqual(2)
    expect(board.y).toEqual(3)
  })
})
