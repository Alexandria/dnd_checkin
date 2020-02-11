import { render } from "@testing-library/react"
import React from "react"
import { Login } from "."

describe("Login", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "Login"

    // Act
    const { getByText } = render(<Login />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
