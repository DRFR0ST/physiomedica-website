import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: '2vh 30vw',
  },
  paragraph: {
    opacity: 0.45,
  },
})

const About = ({ classes }) => {
  return (
    <div id="about" className={classes.root}>
      <Typography variant="h3">About us</Typography>
      <Typography paragraph className={classes.paragraph}>
        Consectetur ullamco deserunt velit do officia laboris ipsum enim. Irure
        est pariatur minim enim deserunt Lorem voluptate tempor minim ad esse
        cupidatat ad mollit. Enim eu nisi ex velit. Non cillum elit id excepteur
        mollit mollit sit veniam. In Lorem deserunt sit amet dolor reprehenderit
        dolor. Exercitation ea aute do dolore non deserunt voluptate.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        Do aute officia officia velit veniam. Dolor enim veniam anim sunt dolore
        ex elit incididunt cupidatat nostrud. Minim enim labore excepteur Lorem.
        Culpa commodo sit est dolor pariatur consequat qui adipisicing cupidatat
        nulla incididunt reprehenderit ex culpa.
      </Typography>
    </div>
  )
}

export default withStyles(styles)(About)
