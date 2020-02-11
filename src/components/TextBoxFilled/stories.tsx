import decoratorCentered from "@storybook/addon-centered"
import React from "react"
import { TextBoxFilled } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "TextBoxFilled",
  decorators: [decoratorCentered],
}

export const example = () => <TextBoxFilled label="Email" />
