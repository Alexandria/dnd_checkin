import { render } from "@testing-library/react"
import React from "react"
import { TextBoxFilled } from "."

describe("TextBoxFilled", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Email"

    // Act
    const textBox = render(<TextBoxFilled label={name} />)
    const received = textBox

    // Assert
    expect(received).toBeDefined()
  })
})
