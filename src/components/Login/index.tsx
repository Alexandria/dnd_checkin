import { Button, Divider, Typography, makeStyles } from "@material-ui/core"
import React from "react"
import { HEIGHT } from "../../utils/height"
import { WIDTH } from "../../utils/width"
import { TextBoxFilled } from "../TextBoxFilled"

const useStyles = makeStyles(() => ({
  login: {
    flexDirection: "column",
    display: "flex",
    minHeight: HEIGHT,
    justifyContent: "center",
    padding: WIDTH * 0.01,
  },

  btn: {
    width: WIDTH * 0.1,
    marginTop: HEIGHT * 0.01,
    marginBottom: HEIGHT * 0.01,
  },
}))

/**
 * Login
 * ------------------------------------------------
 * Login Screen
 */

export function Login() {
  const classes = useStyles()
  return (
    <div className={classes.login}>
      <Typography variant="h2" gutterBottom>
        Welcome Adventurers
      </Typography>
      <form>
        <TextBoxFilled label="Email" />
        <TextBoxFilled label="Password" />
        <Button variant="contained" color="primary" className={classes.btn}>
          login
        </Button>
      </form>
      <Divider />
      <Button variant="contained" color="primary" className={classes.btn}>
        Sign up
      </Button>
    </div>
  )
}
