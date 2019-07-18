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
    alignItems: 'center',
    //minHeight: 'calc(50vh - 64px - 4rem)',
    padding: '1rem 0 0 0',
    width: '100%',
    background: '#f4f4f4',
    zIndex: 5,
    position: 'relative',
  },
  container: {
    width: '100vw',
    maxWidth: '100%',
    position: 'relative',
    marginBottom: '5rem',
  },
  bottomSphere: {
    width: '100%',
    height: '10vh',
    position: 'relative',
    boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    borderRadius: '0 0 100vw 100vw',
    background: '#f4f4f4',
  },
  badge: {
    textAlign: 'center',
    width: '300px',
    margin: '4rem 1rem 0 1rem',
  },
  icon: {
    width: '38px',
    height: '38px',
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    borderRadius: '100px',
    padding: '10px',
    marginBottom: '1rem',
  },
  text: {
    opacity: 0.5,
  },
  '@media (max-width: 768px)': {
    root: {
      flexDirection: 'column',
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
      <div className={classes.bottomSphere} />
    </div>
  )
}

export default withStyles(styles)(Badges)
