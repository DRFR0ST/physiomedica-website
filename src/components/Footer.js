import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

import logo from 'images/logo_transparent.png'

const styles = theme => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    minHeight: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px 0',
    background: '#212121',
    color: '#fff',
    position: 'relative',
  },
  copyright: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    flexWrap: 'wrap',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: '20px 5%',
    "& p": {
      marginLeft: "20px"
    }
  },
  logo: {
    maxHeight: '200px',
    marginRight: '10px',
  },
  '@media (max-width: 768px)': {
    infoContainer: {
      flexDirection: 'column-reverse',
      "& p": {
        marginLeft: "0px"
      }
    },
    logo: {
      marginRight: 0,
    },
  },
})

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <img alt="logo" src={logo} className={classes.logo} />
        <p>
          Do aute eiusmod esse ipsum culpa officia laborum cillum in culpa ut eu
          ex voluptate.
        </p>
        <p>In consectetur est pariatur labore aliqua irure enim.</p>
      </div>
      <div className={classes.copyright}>
        <Typography paragraph>Copyright (c) 2019, PhysioMedica</Typography>
        <Typography paragraph>
          Made with{' '}
          <span role="img" aria-label="Heart">
            💖
          </span>{' '}
          by <a href="https://mike-eling.dev/">ME</a> &{' '}
          <a href="https://instagram.com/karuutek/">KF</a>
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
