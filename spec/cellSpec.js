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
})
