import React from 'react'
import { withStyles } from '@material-ui/styles'

import {
  Phone as PhoneIcon,
  Grade as GradeIcon,
  NewReleases as NewReleasesIcon,
} from '@material-ui/icons'
import { Typography, ButtonBase } from '@material-ui/core'

const states = theme => ({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-45px',
    position: 'relative',
  },
  root: {
    margin: '.6rem auto',
    borderRadius: '82px',
    boxShadow: theme.shadows[1],
    background: '#fff',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zoom: 1,
  },
  action: {
    transition: 'all 255ms ease',
    padding: '.7rem 3rem',
    borderLeft: '1px solid rgba(21, 21, 21, .15)',
    borderRight: '1px solid rgba(21, 21, 21, .15)',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: '#f4f4f4',
    },
    '&:focus': {
      color: theme.palette.primary.dark,
    },
    '&:first-child': {
      borderLeft: 'none',
    },
    '&:last-child': {
      borderRight: 'none',
    },
    '& i': {
      fontSize: '55px',
    },
    '& p': {
      margin: 0,
    },
  },
  '@media (max-width: 768px)': {
    container: {
      marginTop: '-25px',
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      justifyContent: 'initial',
    },
    root: {
      maxWidth: '100%',
      justifyContent: 'initial',
      alignItems: 'initial',
      margin: '0 auto 0.5rem',
    },
    action: {
      padding: '.5rem 2.2rem',
      '& p': {
        display: 'none',
      },
      '&:hover': {
        background: 'transparent',
      },
    },
  },
  '@media (min-width: 769px)': {
    root: {
      maxWidth: '85vw',
    },
  },
})

const ACTIONS = [
  {
    text: 'Rezerwacja',
    icon: GradeIcon,
  },
  {
    text: 'Kontakt',
    icon: PhoneIcon,
  },
  {
    text: 'Nowości',
    icon: NewReleasesIcon,
  },
]

const QuickActions = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        {ACTIONS.map(({ text, icon: Icon }) => (
          <ButtonBase classes={{ root: classes.action }}>
            <div>
              <Icon />
              <Typography paragraph>{text}</Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </div>
  )
}

export default withStyles(states)(QuickActions)
