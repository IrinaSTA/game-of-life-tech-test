describe("Cell", function() {
  var cell;

  it("can be alive", function() {
    cell = new Cell(1)
    expect(cell.state).toEqual(1)
  })

  it("can be dead", function() {
    cell = new Cell(0)
    expect(cell.state).toEqual(0)
  })

  it("can die", function() {
    cell = new Cell(1)
    cell.changeState()
    expect(cell.state).toEqual(0)
  })

  it("can come alive", function() {
    cell = new Cell(0)
    cell.changeState()
    expect(cell.state).toEqual(1)
  })
})
