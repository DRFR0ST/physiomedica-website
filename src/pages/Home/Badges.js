import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import {
  Spa as SpaIcon,
  FlashOn as FlashOnIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons'

const styles = theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
    background: theme.palette.background.dark,
    zIndex: 5,
    position: 'relative',
    padding: '10vh 5%',
  },
  container: {
    width: '100vw',
    maxWidth: '100%',
    position: 'relative',
  },
  gradient: {
    height: '20px',
    position: 'relative',
    width: '100%',
    background:
      'radial-gradient(ellipse farthest-side at top center, rgba(0,0,0,0.08), transparent)',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '0px',
      right: '0',
      left: '0',
      height: '3px',
      background:
        'linear-gradient(left, transparent, rgba(0,0,0,0.02), rgba(0,0,0,0.02), transparent)',
    },
  },
  badge: {
    textAlign: 'center',
    width: '300px',
    padding: '1vh 0',
  },
  icon: {
    width: '38px',
    height: '38px',
    background: theme.palette.primary.contrastText,
    opacity: '0.75',
    color: theme.palette.primary.dark,
    borderRadius: '100px',
    padding: '10px',
    marginBottom: '1rem',
    'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
  text: {
    opacity: 0.5,
  },
  '@media (max-width: 768px)': {
    root: {
      flexDirection: 'column',
      padding: '10vh 0 6vh 0',
    },
    badge: {
      margin: '0.5rem',
    },
    icon: {
      width: '30px',
      height: '30px',
      marginBottom: '0.5rem',
    },
  },
})

const Badges = ({ classes }) => {
  const items = [
    {
      title: 'Lorem ipsum',
      icon: SpaIcon,
      content:
        'Ipsum ex ipsum officia reprehenderit sunt exercitation reprehenderit mollit ad.',
    },
    {
      title: 'Set amet',
      icon: FlashOnIcon,
      content: 'Eiusmod nostrud eu aliquip veniam officia ad in non qui elit.',
    },
    {
      title: 'Dolor magna ex',
      icon: FavoriteIcon,
      content:
        'Irure commodo consectetur mollit ipsum consequat ad magna amet nulla ex consectetur ipsum sit.',
    },
  ]

  return (
    <div className={classes.container}>
      <div id="badges" className={classes.root}>
        {items.map(({ content, icon: Icon, title }, i) => (
          <div className={classes.badge} key={`badge${i}`}>
            <Icon className={classes.icon} />
            <Typography variant="h4">{title}</Typography>
            <Typography paragraph className={classes.text}>
              {content}
            </Typography>
          </div>
        ))}
      </div>
      <div className={classes.gradient} />
    </div>
  )
}

export default withStyles(styles)(Badges)
