import React from 'react'
import { Typography, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import discountsImage from 'images/undraw_discount_d4bd.svg'
import { Star as StarIcon, Favorite as FavoriteIcon } from '@material-ui/icons'
import { useLittera } from 'react-littera'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '90%',
    margin: '5%',
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
    maxWidth: '85%',
    width: '100%',
    padding: '1.5em 2.5em 1.5em 1rem',
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
  starButton: { marginRight: '1rem' },
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

const translations = preset => ({
  discounts: preset.menu.discounts,
  discount01_title: {
    pl_PL: 'Jedenasty zabieg gratis',
    en_US: 'Eleventh treatment free',
  },
  discount01_content: {
    pl_PL: 'Przy zapisie na dziesięć zabiegów, jedenasty jest gratis.',
    en_US: 'When registering for ten treatments, the eleventh is free.',
  },
  discount02_title: {
    pl_PL: 'Vouchery okazjonalne',
    en_US: 'Occasional vouchers',
  },
  discount02_content: {
    pl_PL: 'Imieniny, urodziny i święta są u nas pełne prezentów.',
    en_US: 'Name days, birthdays and holidays are full of gifts with us.',
  },
})

const Discounts = ({ classes }) => {
  const [translated] = useLittera(translations)

  const DISCOUNT_LIST = [
    {
      title: translated.discount01_title,
      content: translated.discount01_content,
      icon: StarIcon,
    },
    {
      title: translated.discount02_title,
      content: translated.discount02_content,
      icon: FavoriteIcon,
    },
  ]
  return (
    <div id="discounts" className={classes.root}>
      <div>
        <img alt="discounts" src={discountsImage} className={classes.image} />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          {translated.discounts}
        </Typography>
        <div className={classes.content}>
          {DISCOUNT_LIST.map(({ icon: Icon, ...e }) => (
            <div className={classes.card}>
              <IconButton
                size="medium"
                color="primary"
                className={classes.starButton}>
                <Icon />
              </IconButton>
              <div className={classes.text}>
                <Typography variant="h5">{e.title}</Typography>
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
