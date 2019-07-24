import React from 'react'
import { withStyles } from '@material-ui/core'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Badges from './Badges'
import Pricing from './Pricing'
import Discounts from './Discounts'

const styles = theme => ({
  root: {},
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Intro />
      <Badges />
      <About />
      <Pricing />
      <Discounts />
      <Contact />
    </div>
  )
}

export default withStyles(styles)(Home)
