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

Board.prototype._adjCoord = function(cell) {
  adj = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]]
  coord = []
  adj.forEach(function(element) {
    coord.push([cell.x + element[0], cell.y + element[1]])
  })
  return coord
}

Board.prototype._findByCoord = function([x, y]) {
  cell = this.cells.filter(obj => (obj.x === x && obj.y === y))
  return cell
}

Board.prototype._adjCells = function(cell) {
  coord = this._adjCoord(cell)
  return coord.map(coord => this._findByCoord(coord)).flat()
}

Board.prototype.liveNeighbours = function(cell) {
  return this._adjCells(cell).filter(obj => obj.state === 1).length
}
