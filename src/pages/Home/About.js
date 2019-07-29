import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import aboutImage from 'images/undraw_in_thought_gjsf.svg'
import { useLittera } from 'react-littera'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '90%',
    margin: '10% 5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    textAlign: 'left',
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
  about: preset.menu.about,
  p1: {
    en_US: `Ms. Justyna has specialized in the profession of a physiotherapist for 10 years. To this day she is associated with SP ZOZ in Sokołów Podlaski.
She participated in many trainings and courses, constantly raising her qualifications and knowledge.
Individually and with commitment, she approaches each patient.`,
    pl_PL: `Pani Justyna specjalizuje się w zawodzie fizjoterapeuty od 10 lat. Do dziś związana jest z SP ZOZ w Sokołowie Podlaskim.
Uczestniczyła w wielu szkoleniach i kursach stale podnosząc kwalifikacje i zasób wiedzy.
Indywidualnie i z zaangażowaniem podchodzi do każdego Pacjenta.`,
  },
  p2: {
    en_US: `The goal of Ms. Justyna is first and foremost correct diagnosis
problem and getting rid of it effectively. Enjoy life without pain.`,
    pl_PL: `Celem Pani Justyny jest przede wszystkim prawidłowe zdiagnozowanie
problemu oraz skuteczne się jego pozbycie. Wierzymy, że po
skorzystaniu z zabiegów Pani mgr Justyny Kuc, będziecie mogli Państwo
cieszyć się życiem bez bólu.`,
  },
})

const About = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <div id="about" className={classes.root}>
      <div>
        <img alt="about" src={aboutImage} className={classes.image} />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          {translated.about}
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          {translated.p1}
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          {translated.p2}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(About)
