import { render } from "@testing-library/react"
import React from "react"
import { TextBoxFilled } from "."

describe("TextBoxFilled", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "TextBoxFilled"

    // Act
    const { getByText } = render(<TextBoxFilled label="Email" />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
