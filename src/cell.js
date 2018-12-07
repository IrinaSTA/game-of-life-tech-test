function Cell(state) {
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
