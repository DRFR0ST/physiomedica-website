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
    background: '#f4f4f4',
    color: '#5a5a5a',
    position: 'relative',
    'box-shadow':
      'inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24)',
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
    '& p': {
      marginLeft: '20px',
    },
  },
  logo: {
    maxHeight: '200px',
  },
  '@media (max-width: 768px)': {
    infoContainer: {
      flexDirection: 'column-reverse',
      '& p': {
        marginLeft: '0px',
      },
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
        <div>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>ZnanyLekarz</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div style={{ marginRight: '5vw' }}>
          <ul>
            <li>Polityka Prywatności</li>
            <li>Regulamin</li>
            <li>Cookies</li>
            <li>Pomoc</li>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <Typography paragraph>Copyright (c) 2019, PhysioMedica</Typography>
        <Typography paragraph>
          Made with{' '}
          <span role="img" aria-label="Heart">
            💖
          </span>{' '}
          by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mike-eling.dev/">
            ME
          </a>{' '}
          &{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/karuutek/">
            KF
          </a>
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
