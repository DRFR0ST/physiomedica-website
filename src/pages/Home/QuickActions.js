import React from 'react'
import { withStyles } from '@material-ui/styles'

import {
  Phone as PhoneIcon,
  Grade as GradeIcon,
  NewReleases as NewReleasesIcon,
  School as SchoolIcon,
  Photo as PhotoIcon,
} from '@material-ui/icons'
import { Typography, ButtonBase } from '@material-ui/core'

import { useLittera } from 'react-littera'

import SuperLink from '../../components/SuperLink'

const states = theme => ({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    marginBottom: '-45px',
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
    color: theme.palette.background.contrastText,
    '&:hover': {
      background: theme.palette.background.dark,
    },
    '&:focus': {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.dark,
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
      display: 'none',
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

const translations = preset => ({
  reservation: preset.menu.reservation,
  contact: preset.menu.contact,
  news: {
    en_US: 'News',
    pl_PL: 'Nowości',
  },
  diplomas: {
    en_US: 'Diplomas',
    pl_PL: 'Dyplomy',
  },
  gallery: preset.menu.gallery,
})

const QuickActions = ({ classes }) => {
  const [translated] = useLittera(translations)

  const ACTIONS = [
    {
      text: translated.reservation,
      icon: GradeIcon,
      url: '/reservation',
    },
    {
      text: translated.contact,
      icon: PhoneIcon,
      url: '/contact',
    },
    {
      text: translated.news,
      icon: NewReleasesIcon,
      url: '/news',
    },
    {
      text: translated.diplomas,
      icon: SchoolIcon,
      url: '/diplomas',
    },
    {
      text: translated.gallery,
      icon: PhotoIcon,
      url: '/gallery',
    },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        {ACTIONS.map(({ text, icon: Icon, url }) => (
          <SuperLink to={url} style={{ userSelect: 'none' }}>
            <ButtonBase classes={{ root: classes.action }}>
              <div>
                <Icon />
                <Typography paragraph>{text}</Typography>
              </div>
            </ButtonBase>
          </SuperLink>
        ))}
      </div>
    </div>
  )
}

export default withStyles(states)(QuickActions)
