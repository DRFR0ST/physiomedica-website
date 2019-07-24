import React from 'react'
import { Typography, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import discountsImage from 'images/undraw_discount_d4bd.svg'
import { Star as StarIcon } from '@material-ui/icons'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '90%',
    margin: '10% 5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    position: 'relative',
    maxWidth: '820px',
  },
  title: {
    marginBottom: '0.7rem',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paragraph: {
    opacity: 0.45,
  },
  image: {
    width: '40vw',
    marginRight: '5vw',
    maxWidth: '820px',

    maxHeight: '520px',
  },
  content: {
    textAlign: 'left',
    padding: '5%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  card: {
    width: '100%',
    padding: '2em 3em',
    borderRadius: '6px',
    background: theme.palette.background.light,
    boxShadow: theme.shadows[2],
    margin: '1rem 0',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'box-shadow 255ms ease',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
    '& p': {
      margin: 0,
    },
    '& h4': {
      margin: 0,
    },
  },
  starButton: { margin: '0 1rem 0 0' },
  text: {},
  '@media (max-width: 768px)': {
    root: {
      flexDirection: 'column',
      margin: '20% 5%',
    },
    image: {
      marginRight: '0',
      width: '80vw',
      marginBottom: '3rem',
    },
  },
})

const DISCOUNT_LIST = [
  {
    title: 'Example',
    content:
      'In anim laborum aliqua Lorem nostrud Lorem laborum magna dolor ipsum cupidatat sint.',
  },
  {
    title: 'Example',
    content: 'Exercitation nulla qui eu mollit cupidatat velit.',
  },
  {
    title: 'Example',
    content:
      'Enim officia veniam consectetur aute id commodo magna quis nulla.',
  },
]

const Discounts = ({ classes }) => {
  return (
    <div id="discounts" className={classes.root}>
      <div>
        <img alt="discounts" src={discountsImage} className={classes.image} />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Promocje
        </Typography>
        <div className={classes.content}>
          {DISCOUNT_LIST.map(e => (
            <div className={classes.card}>
              <IconButton
                size="large"
                color="primary"
                className={classes.starButton}>
                <StarIcon />
              </IconButton>
              <div className={classes.text}>
                <Typography variant="h4">{e.title}</Typography>
                <Typography paragraph style={{ opacity: 0.4 }}>
                  {e.content}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Discounts)
