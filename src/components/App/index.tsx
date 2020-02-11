import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import "./styles.css"
import { HEIGHT } from "../../utils/height"
import { WIDTH } from "../../utils/width"
import { Login } from "../Login"

const useStyles = makeStyles(() => ({
  root: {
    height: HEIGHT,
    width: WIDTH,
  },
}))

export function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Login />
    </div>
  )
}
