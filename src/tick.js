function Tick(board) {
  this.board = board
}

Tick.prototype.inspect = function(cell) {
  if (cell.state === 1) {
    if (board.liveNeighbours(cell) < 2 || board.liveNeighbours(cell) > 3) {
      return 0
    } else {
      return 1
    }
  } else {
    if (board.liveNeighbours(cell) === 3) {
      return 1
    } else {
      return 0
    }
  }
}

Tick.prototype.stageChanges = function() {
  this.newStates = this.board.cells.map(obj => this.inspect(obj))
  return this.newStates
}
