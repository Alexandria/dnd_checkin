import { render } from "@testing-library/react"
import React from "react"
import { Login } from "."

describe("Login", () => {
  it("name prop is rendered", () => {
    // Arrange

    // Act
    const login = render(<Login />)

    // Assert
    expect(login).toBeDefined()
  })
})
