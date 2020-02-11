import { HEIGHT } from "."

describe("height", () => {
  it("works", () => {
    // Arrange
    const valA = window.screen.height

    // Act
    const received = HEIGHT
    const expected = valA

    // Assert
    expect(received).toEqual(expected)
  })
})
