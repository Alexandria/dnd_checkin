import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { HEIGHT } from "../../utils/height"
import { WIDTH } from "../../utils/width"

const useStyles = makeStyles(() => ({
  textBox: {
    display: "flex",
    width: WIDTH * 0.3,
    marginBottom: HEIGHT * 0.02,
  },
}))

interface Props {
  label: string
}

/**
 * TextBoxFilled
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export function TextBoxFilled(props: Props) {
  const classes = useStyles()
  return (
    <TextField
      className={classes.textBox}
      id="filled-basic"
      label={props.label}
      variant="filled"
    />
  )
}
