import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    height: '300vh',
  },
})

const Reservation = ({ classes }) => {
  return <div className={classes.root}>Reservation</div>
}

export default withStyles(styles)(Reservation)
