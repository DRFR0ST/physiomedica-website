import React from 'react'
import { withStyles } from '@material-ui/core'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Badges from './Badges'

const styles = theme => ({
  root: {},
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Intro />
      <Badges />
      <About />
      <Contact />
    </div>
  )
}

export default withStyles(styles)(Home)
