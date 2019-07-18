import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import aboutImage from 'images/undraw_in_thought_gjsf.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '90%',
    margin: '10% 5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    textAlign: 'left',
    position: 'relative',
    maxWidth: '820px',
  },
  title: {
    marginBottom: '0.7rem',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  paragraph: {
    opacity: 0.45,
  },
  image: {
    width: '40vw',
    marginRight: '5vw',
    maxWidth: '820px',

    maxHeight: '520px',
  },
  '@media (max-width: 768px)': {
    root: {
      flexDirection: 'column',
    },
    image: {
      marginRight: '0',
      width: '80vw',
      marginBottom: '3rem',
    },
  },
})

const About = ({ classes }) => {
  return (
    <div id="about" className={classes.root}>
      <div>
        <img alt="about" src={aboutImage} className={classes.image} />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          O NAS
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          Consectetur ullamco deserunt velit do officia laboris ipsum enim.
          Irure est pariatur minim enim deserunt Lorem voluptate tempor minim ad
          esse cupidatat ad mollit. Enim eu nisi ex velit. Non cillum elit id
          excepteur mollit mollit sit veniam. In Lorem deserunt sit amet dolor
          reprehenderit dolor. Exercitation ea aute do dolore non deserunt
          voluptate.
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          Do aute officia officia velit veniam. Dolor enim veniam anim sunt
          dolore ex elit incididunt cupidatat nostrud. Minim enim labore
          excepteur Lorem. Culpa commodo sit est dolor pariatur consequat qui
          adipisicing cupidatat nulla incididunt reprehenderit ex culpa.
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(About)
