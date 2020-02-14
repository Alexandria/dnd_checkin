import { WIDTH } from "."

describe("width", () => {
  it("works", () => {
    // Arrange
    const valA = window.innerWidth

    // Act
    const received = WIDTH
    const expected = valA

    // Assert
    expect(received).toEqual(expected)
  })
})
