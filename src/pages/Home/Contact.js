import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {
    width: '90vw',
    marginLeft: '5vw',
    margin: '3rem 0',
  },
})

const Contact = ({ classes }) => {
  return (
    <div id="contact" className={classes.root}>
      Contact
    </div>
  )
}

export default withStyles(styles)(Contact)
