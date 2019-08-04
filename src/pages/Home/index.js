import React from 'react'
import { withStyles } from '@material-ui/core'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Badges from './Badges'
import Pricing from './Pricing'
import Discounts from './Discounts'
import FunQuote from './FunQuote'
import Diseases from './Diseases'

const styles = theme => ({
  root: {
    paddingTop: 64,
  },
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Intro />
      <Badges />
      <About />
      <Diseases />
      <Pricing />
      <FunQuote />
      <Discounts />
      <Contact />
    </div>
  )
}

export default withStyles(styles)(Home)
