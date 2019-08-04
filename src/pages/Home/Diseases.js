import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { useLittera } from 'react-littera'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '4% 5%',
    margin: '10% 0',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.dark,
  },
  items: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    boxShadow: theme.shadows[1],
    padding: '10px 15px',
    borderRadius: '10px',
    background: theme.palette.background.light,
    transition: 'box-shadow 255ms ease',
    margin: '1rem',
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      boxShadow: theme.shadows[3],
    },
  },
}))

const translations = preset => ({
  diseases: preset.menu.diseases,
  slogan: {
    pl_PL: 'Schorzenia leczone w naszym gabinecie',
    en_US: 'Disorders treated in our office',
  },
})

const Diseases = () => {
  const classes = useStyles()
  const [translated] = useLittera(translations)

  const items = [
    {
      name: 'Schorzenie nr. 1',
    },
    {
      name: 'Schorzenie nr. 2',
    },
    {
      name: 'Schorzenie nr. 3',
    },
    {
      name: 'Schorzenie nr. 4',
    },
    {
      name: 'Schorzenie nr. 5',
    },
  ]

  return (
    <div id="diseases" className={classes.root}>
      <div style={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          color="primary">
          {translated.diseases}
        </Typography>
        <Typography paragraph style={{ opacity: 0.5 }}>
          {translated.slogan}
        </Typography>
        <div className={classes.items}>
          {[...items, ...items, ...items, ...items].map((e, i) => (
            <div key={`disease_item_${i}`} className={classes.item}>
              {e.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Diseases
