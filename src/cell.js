// x and y are coordinates on the x and y axis of a board
function Cell(x, y, state) {
  this.x = x
  this.y = y
  this.state = state
}

// 0 for dead, 1 for alive
Cell.prototype.changeState = function() {
  if (this.state === 0) {
    this.state = 1
  } else {
    this.state = 0
  }
}
