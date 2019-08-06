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
    textAlign: 'left',
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
      flexBasis: '100%',
    },
    root: {
      justifyContent: 'space-between',
      textAlign: 'center',
    },
    menu: {
      display: 'block',
      flexBasis: '15%',
      margin: '0 15px',
    },
  },
})

const translations = preset => ({ ...preset.menu })

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
        <Button
          size="small"
          style={{ margin: '0 4px' }}
          onClick={() => goTo('')}>
          {translated.home}
        </Button>
        <Button
          size="small"
          style={{ margin: '0 4px' }}
          onClick={() => goTo('about')}>
          {translated.about}
        </Button>
        <Button
          size="small"
          style={{ margin: '0 4px' }}
          onClick={() => goTo('diseases')}>
          {translated.diseases}
        </Button>
        <Button
          size="small"
          style={{ margin: '0 4px' }}
          onClick={() => goTo('pricing')}>
          {translated.pricing}
        </Button>
        <Button
          size="small"
          style={{ margin: '0 4px' }}
          onClick={() => goTo('discounts')}>
          {translated.discounts}
        </Button>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Navbar)
