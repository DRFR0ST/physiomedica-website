import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { useLittera } from 'react-littera'
import illustration from 'images/undraw_doctors_hwty.svg'
import QuickActions from './QuickActions'

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '50vh',
    background: theme.palette.background.dark,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: '2% 0 2% 0',
  },

  left: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& h2': {
      margin: 0,
    },
    '& p': {
      margin: 0,
      opacity: 0.35,
    },
  },
  right: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '70%',
      maxHeight: '90%',
      userSelect: 'none',
      userDrag: 'none',
    },
  },

  '@media (max-width: 768px)': {
    root: {
      flexDirection: 'column',
      padding: '2% 0 60px',
    },
    left: {
      flexBasis: '10%',
      margin: '2rem 0',
    },
    right: {
      flexBasis: '90%',
    },
  },
})

const translations = {
  physiotherapy: {
    en_US: 'Physiotherapy',
    pl_PL: 'Fizjoterapia',
  },
  massage: {
    en_US: '& massage',
    pl_PL: '& masaż',
  },
}

const Intro = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.left}>
          <div>
            <Typography paragraph>mgr Justyna Kuc</Typography>
            <Typography color="primary" variant="h2">
              {translated.physiotherapy}
            </Typography>
            <Typography
              color="primary"
              style={{ textAlign: 'right' }}
              variant="h2">
              {translated.massage}
            </Typography>
          </div>
        </div>
        <div className={classes.right}>
          <img alt="illustration" src={illustration} />
        </div>
      </div>
      <QuickActions />
    </div>
  )
}

export default withStyles(styles)(Intro)
