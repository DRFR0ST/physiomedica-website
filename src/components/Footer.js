import React, { useState } from 'react'
import {
  withStyles,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { useLittera } from 'react-littera'
import logo from 'images/logo_transparent.png'
import usFlag from 'images/flags/US.svg'
import plFlag from 'images/flags/PL.svg'

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
  flag: {
    maxHeight: '17px',
    marginRight: '10px',
    borderRadius: '5px',
  },
  flagButton: {
    maxHeight: '13.5px',
    marginRight: '10px',
    borderRadius: '5px',
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

const translations = {
  pl_PL: {
    en_US: 'Polish',
    pl_PL: 'Polski',
  },
  en_US: {
    en_US: 'English',
    pl_PL: 'Angielski',
  },
}

const Footer = ({ classes }) => {
  const [translated, language, setLanguage] = useLittera(translations)
  const [anchorEl, setAnchorEl] = useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleSelect(value) {
    setLanguage(value)
    handleClose()
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const enFlagEl =
    language === 'pl_PL' ? (
      <img alt="PL Flag" src={plFlag} className={classes.flagButton} />
    ) : (
      <img alt="US Flag" src={usFlag} className={classes.flagButton} />
    )

  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <img alt="logo" src={logo} className={classes.logo} />
        <div style={{ marginRight: '5vw' }}>
          <ul>
            <li>Polityka Prywatności</li>
            <li>Regulamin</li>
            <li>Cookies</li>
            <li>Pomoc</li>
          </ul>
        </div>
        <div style={{ alignSelf: 'flex-start' }}>
          <div style={{ alignSelf: 'flex-start' }}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              {enFlagEl}
              {translated[language]}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={() => handleSelect('pl_PL')}>
                <img alt="PL Flag" src={plFlag} className={classes.flag} />
                {translated['pl_PL']}
              </MenuItem>
              <MenuItem onClick={() => handleSelect('en_US')}>
                <img alt="US Flag" src={usFlag} className={classes.flag} />
                {translated['en_US']}
              </MenuItem>
            </Menu>
          </div>
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
