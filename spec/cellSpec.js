describe("Cell", function() {
  var cell;

  it("can be alive", function() {
    cell = new Cell(1)
    expect(cell.state).toEqual(1)
  })
})
