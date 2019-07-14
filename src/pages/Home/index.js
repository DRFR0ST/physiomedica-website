import React from 'react'
import { withStyles } from '@material-ui/core'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'

const styles = theme => ({
  root: {
    marginTop: '64px',
  },
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Intro />
      <About />
      <Contact />
    </div>
  )
}

export default withStyles(styles)(Home)
