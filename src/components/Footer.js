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
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    minHeight: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px 0 0 0',
    background: `linear-gradient(to top, #f1f1f1, ${
      theme.palette.background.light
    })`,
    color: '#5a5a5a',
    position: 'relative',
    /*'box-shadow':
      'inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24)',*/
  },
  copyright: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 5%',
    borderTop: '0.5px solid rgba(21, 21, 21, 0.1)',
    flexWrap: 'wrap',
    '& p': {
      margin: 0,
    },
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    flexWrap: 'wrap',
    padding: '20px 5%',
    '& p': {
      marginLeft: '20px',
    },
  },
  logo: {
    maxHeight: '200px',
    display: 'inline-block',
  },
  flag: {
    maxHeight: '17px',
    marginRight: '10px',
  },
  flagButton: {
    maxHeight: '13.5px',
    marginRight: '10px',
  },
  languageContainer: {
    alignSelf: 'flex-start',
  },
  '@media (max-width: 768px)': {
    infoContainer: {
      justifyContent: 'center',
      flexDirection: 'row-reverse',
      padding: '20px 1%',
      '& p': {
        marginLeft: '0px',
      },
    },
    logo: {
      marginRight: 0,
      marginLeft: '10px',

      //display: 'none',
    },
    languageButton: {
      alignSelf: 'center',
    },
    languageContainer: {
      alignSelf: 'center',
    },
    copyright: {
      justifyContent: 'center',
    },
  },
  link: {
    color: '#212121',
    '&:hover': {
      color: '#0000006e',
    },
  },
  links: {
    display: 'inline-block',
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
  privacyPolicy: {
    en_US: 'Privacy Policy',
    pl_PL: 'Polityka Prywatności',
  },
  rules: {
    en_US: 'Rules',
    pl_PL: 'Regulamin',
  },
  cookies: {
    en_US: 'Cookies',
    pl_PL: 'Ciasteczka',
  },
  help: {
    en_US: 'Help',
    pl_PL: 'Pomoc',
  },
  switchLang: {
    en_US: 'Switch language',
    pl_PL: 'Zmień język',
  },
}

const Footer = ({ classes }) => {
  const [translated, language, setLanguage] = useLittera(translations)
  const [anchorEl, setAnchorEl] = useState(null)

  const additionalLinks = [
    {
      text: translated.privacyPolicy,
      url: '/privacy-policy',
    },
    {
      text: translated.rules,
      url: '/rules',
    },
    {
      text: translated.cookies,
      url: '/cookies',
    },
    {
      text: translated.help,
      url: '/help',
    },
  ]

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
        <div className={classes.links}>
          <ul>
            {additionalLinks.map(e => (
              <li key={`additional-footer-link-${e.text}`}>
                <Link className={classes.link} to={e.url}>
                  {e.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.languageContainer}>
          <div style={{ alignSelf: 'flex-start' }}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              variant="outlined"
              className={classes.languageButton}
              onClick={handleClick}>
              {enFlagEl}
              {translated.switchLang}
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
