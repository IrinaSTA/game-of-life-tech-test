// x for x-axis/width, y for y-axis/height
function Board(x, y, cellClass = Cell) {
  this.x = x
  this.y = y
  this.cellClass = cellClass
  this.cells = (typeof this.cells === 'undefined') ? this._setUpBoard() : this.cells;
}

// sets up board with live and dead cells chosen at random
Board.prototype._setUpBoard = function(style = _random) {
  initial_state = []
  for (yStep = 1; yStep <= this.y; yStep++) {
    for (xStep = 1; xStep <= this.x; xStep++) {
      initial_state.push(new this.cellClass(xStep, yStep, style()))
    }
  }
  return initial_state
}

function _random() {
  return Math.round(Math.random())
}
