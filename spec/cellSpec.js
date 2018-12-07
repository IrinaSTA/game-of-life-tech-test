describe("Cell", function() {
  var cell;

  it("can be alive", function() {
    cell = new Cell(1, 1, 1)
    expect(cell.state).toEqual(1)
  })

  it("can be dead", function() {
    cell = new Cell(1, 1, 0)
    expect(cell.state).toEqual(0)
  })

  it("can die", function() {
    cell = new Cell(1, 1, 1)
    cell.changeState()
    expect(cell.state).toEqual(0)
  })

  it("can come alive", function() {
    cell = new Cell(1, 1, 0)
    cell.changeState()
    expect(cell.state).toEqual(1)
  })

  it("has x-coorindate", function() {
    cell = new Cell(1, 2, 0)
    expect(cell.x).toEqual(1)
  })

  it("has y-coorindate", function() {
    cell = new Cell(1, 2, 0)
    expect(cell.y).toEqual(2)
  })
})
