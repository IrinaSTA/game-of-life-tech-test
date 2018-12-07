function Game(x, y, numOfTicks, boardClass = Board, tickClass = Tick) {
  this.board = new boardClass(x, y)
  this.numOfTicks = numOfTicks
  this.currentTickNum = 0
  this.tickClass = tickClass
}

Game.prototype.play = function() {
  tick = new this.tickClass(this.board)
  var n = 0
  while (n < this.numOfTicks) {
    tick.changeBoard()
    n++
  }
}
