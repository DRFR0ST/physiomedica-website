import React, { useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { withStyles, Paper, Button, IconButton } from '@material-ui/core'
import { useLittera } from 'react-littera'
import { Menu as MenuIcon } from '@material-ui/icons'

const styles = theme => ({
  root: {
    background: theme.palette.background.light,
    height: '64px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    fontFamily: "'Montserrat', sans-serif",
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
    letterSpacing: '10px',
    fontWeight: 500,
    cursor: 'pointer',
    userSelect: 'none',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
  },
  menu: {
    display: 'none',
  },
  '@media (max-width: 768px)': {
    buttons: {
      display: 'none',
    },
    logo: {
      letterSpacing: '5px',
      fontSize: '1.3rem',
      flexBasis: '85%',
    },
    root: {
      justifyContent: 'space-between',
    },
    menu: {
      display: 'block',
      flexBasis: '15%',
      margin: '0 15px',
    },
  },
})

const translations = {
  home: {
    en_US: 'Home',
    pl_PL: 'Strona główna',
  },
  about: {
    en_US: 'About',
    pl_PL: 'O nas',
  },
  contact: {
    en_US: 'Contact',
    pl_PL: 'Kontakt',
  },
  reservation: {
    en_US: 'Reservation',
    pl_PL: 'Rezerwacja',
  },
}

const Navbar = ({ classes, toggleDrawer, goTo }) => {
  const [elevate, setElevate] = useState(false)
  const [translated] = useLittera(translations)

  useEventListener('scroll', () => {
    if (!elevate && window.pageYOffset > 5) setElevate(true)
    else if (elevate && window.pageYOffset <= 5) setElevate(false)
  })


  return (
    <Paper elevation={elevate ? 2 : 0} className={classes.root}>
      <div className={classes.menu}>
        <IconButton onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.logo}>PHYSIOMEDICA</div>
      <div className={classes.buttons}>
        <Button style={{ margin: '0 8px' }} onClick={() => goTo('')}>
          {translated.home}
        </Button>
        <Button style={{ margin: '0 8px' }} onClick={() => goTo('about')}>
          {translated.about}
        </Button>
        <Button style={{ margin: '0 8px' }} onClick={() => goTo('contact')}>
          {translated.contact}
        </Button>
        <Button style={{ margin: '0 8px' }} variant="outlined">
          {translated.reservation}
        </Button>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Navbar)