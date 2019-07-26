import React, { useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'auto',
    padding: '5% 0',
    margin: '1rem 0',
    background: theme.palette.background.dark,
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '1.75rem',
    margin: 0,
    opacity: 0.55,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    margin: 0,
    opacity: 0.7,
    color: theme.palette.primary.dark,
  },
}))

const quotes = [
  'Fizjoterapia sięga starożytności',
  'Najwięcej kości mamy w kończynach',
  'Haluksy to dolegliwość raczej kobieca',
  'Broda ma dodawać nie tylko uroku',
  'Twoje mięśnie żwaczowe mogą mieć siłę nawet do pół tony!',
]

const FunQuote = () => {
  const classes = useStyles()
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  )

  useEffect(() => {
    setInterval(
      () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]),
      5000
    )
  }, [])

  return (
    <div className={classes.root}>
      <Typography paragraph className={classes.headerText}>
        czy wiesz że..
      </Typography>
      <Typography paragraph className={classes.text}>
        {quote}
      </Typography>
    </div>
  )
}

export default FunQuote
