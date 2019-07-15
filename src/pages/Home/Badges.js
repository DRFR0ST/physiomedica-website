import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { Spa as SpaIcon } from '@material-ui/icons'
import uuid from 'uuid/v1'

const styles = theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: 'calc(50vh - 64px - 4rem)',
    padding: '1rem 0',
    width: '100%',
  },
  badge: {
    textAlign: 'center',
    width: '300px',
    margin: '1rem 1rem',
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
      icon: SpaIcon,
      content: 'Eiusmod nostrud eu aliquip veniam officia ad in non qui elit.',
    },
    {
      title: 'Dolor magna ex',
      icon: SpaIcon,
      content:
        'Irure commodo consectetur mollit ipsum consequat ad magna amet nulla ex consectetur ipsum sit.',
    },
  ]

  return (
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
  )
}

export default withStyles(styles)(Badges)
