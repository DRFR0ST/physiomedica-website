import React, { useState, useEffect, useMemo } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { useLittera } from 'react-littera'

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

const translations = preset => ({
  know: {
    pl_PL: 'czy wiesz że..',
    en_US: 'did you know that...',
  },
  quotes: {
    pl_PL: `Fizjoterapia sięga starożytności |
    Najwięcej kości mamy w kończynach |
    Haluksy to dolegliwość raczej kobieca |
    Broda ma dodawać nie tylko uroku |
    Twoje mięśnie żwaczowe mogą mieć siłę nawet do pół tony!`,
    en_US: `Physiotherapy goes back to antiquity |
    We have the most bones in the limbs |
    Haluks is a rather feminine ailment |
    The beard has to add not only charm |
    Your rumen muscles can have up to half a ton of strength!`,
  },
})

const FunQuote = () => {
  const [translated, language] = useLittera(translations)
  const quotes = useMemo(() => translated.quotes.split('|'), [language]) // eslint-disable-line

  const classes = useStyles()
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  )

  useEffect(() => {
    const inter = setInterval(
      () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]),
      5000
    )

    return () => clearInterval(inter)
  }, [quotes, language]) // eslint-disable-line

  useEffect(() => setQuote(quotes[Math.floor(Math.random() * quotes.length)]), [language, quotes]) // eslint-disable-line

  return (
    <div className={classes.root}>
      <Typography paragraph className={classes.headerText}>
        {translated.know}
      </Typography>
      <Typography paragraph className={classes.text}>
        {quote}
      </Typography>
    </div>
  )
}

export default FunQuote
