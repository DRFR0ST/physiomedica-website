import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import {
  Phone as PhoneIcon,
  Grade as GradeIcon,
  NewReleases as NewReleasesIcon,
  School as SchoolIcon,
} from '@material-ui/icons'
import { useLittera } from 'react-littera'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    boxShadow:
      '0px -1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  },
  gutter: { width: '100%', height: '56px' },
  '@media (min-width: 768px)': {
    root: {
      display: 'none',
    },
    gutter: {
      display: 'none',
    },
  },
}))
const translations = {
  reservation: {
    en_US: 'Reservation',
    pl_PL: 'Rezerwacja',
  },
  contact: {
    en_US: 'Contact',
    pl_PL: 'Kontakt',
  },
  news: {
    en_US: 'News',
    pl_PL: 'Nowości',
  },
  diplomas: {
    en_US: 'Diplomas',
    pl_PL: 'Dyplomy',
  },
}
export default function BottomNav({ handleChange }) {
  const classes = useStyles()

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
      url: 'https://facebook.com/physiomedicaJ.K',
    },
    {
      text: translated.diplomas,
      icon: SchoolIcon,
      url: '/diplomas',
    },
  ]

  return (
    <React.Fragment>
      <div className={classes.gutter} />
      <BottomNavigation showLabels className={classes.root}>
        {ACTIONS.map(({ text, icon: Icon, url }) => (
          <BottomNavigationAction
            onClick={() => handleChange(url)}
            label={text}
            icon={<Icon />}
          />
        ))}
      </BottomNavigation>
    </React.Fragment>
  )
}
