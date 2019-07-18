import React from 'react'
import { withStyles } from '@material-ui/core'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Badges from './Badges'
import InteriorView from './InteriorView'

const styles = theme => ({
  root: {
    marginTop: '64px',
  },
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Intro />
      <Badges />
      <About />
      <Contact />
      <InteriorView />
    </div>
  )
}

export default withStyles(styles)(Home)
