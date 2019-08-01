import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}))

const Gift = () => {
  const classes = useStyles()

  return <div className={classes.root}>Gift</div>
}

export default Gift
