import React from 'react'
import {
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
} from '@material-ui/core'
import { useLittera } from 'react-littera'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '4% 5%',
    margin: '10% 0',
    background: theme.palette.background.dark,
  },
  items: {
    maxWidth: '55%',
    textAlign: 'left',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  chip: {
    margin: theme.spacing(1),
    height: 'initial',
    minHeight: '32px',
    padding: 5,
    borderRadius: '200px',
    '& span': {
      'white-space': 'normal',
    },
  },
  chipList: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  lower: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    position: 'relative',
  },
  expPanel: {},
  illustration: {
    height: 'auto',
    width: '100%',
    maxWidth: 'calc(80% - 4rem)',
    padding: '0 2rem',
    position: 'relative',

    '& img': {
      maxWidth: '100%',
      maxHeight: '450px',
    },
  },
  '@media (max-width: 768px)': {
    lower: {
      flexDirection: 'column',
    },
    items: {
      maxWidth: '100%',
    },
    illustration: {
      display: 'none',
    },
  },
}))

const translations = preset => ({
  diseases: preset.menu.diseases,
  slogan: {
    pl_PL: 'Schorzenia leczone w moim gabinecie',
    en_US: 'Disorders treated in my office',
  },
})

const Diseases = () => {
  const classes = useStyles()
  const [translated, language] = useLittera(translations)

  const items =
    language === 'pl_PL'
      ? [
          {
            title: 'Fizjoterapia ortopedyczna',
            elements: [
              'bole kręgosłupa różnego pochodzenia',
              'stany po urazach (złamania, skręcenia, zwichnięcia)',
              'bole barków (m.in bark zamrożony), bóle łokci (łokieć tenisisty, golfisty), bóle nadgarstków, kolan, bioder, stawów skokowych',
              'stany po endoprotezoplastyce stawów kolanowych, biodrowych',
              'stany po rekonstrukcji więzadeł ACL, PCL stawu kolanowego',
              'bole, naciągnięcia, naderwania mięśni',
              'przeciążenie, przetrenowanie całego organizmu',
              'zmiany zwyrodnieniowe stawów',
            ],
          },
          {
            title: 'Fizjoterapia neurologiczna',
            elements: [
              'choroby neurologiczne (SM, ch. Parkinsona, polineuropatie, ataksja móżdżkowo-rdzeniowa i inne)',
              'stany po udarach mózgu',
              'stany po urazach mózgowo-rdzeniowych',
            ],
          },
          {
            title: 'Fizjoterapia Uroginekologiczna',
            elements: [
              'wysilkowe nietrzymanie moczu',
              'pęcherz nadreaktywna',
              'obniżenie narządów miednicy mniejszej',
              'wypadanie narządów miednicy mniejszej',
              'bolesne miesiączkowanie',
              'rozejscie "kresy białej"',
              'profilaktyka i edukacja',
            ],
          },
          {
            title: 'Masaż',
            elements: [
              'leczniczy, klasyczny',
              'sportowy',
              'limfatyczny',
              'antycellulitowy',
              'relaksacyjny',
              'bańką chińską',
            ],
          },
          {
            title: 'Inne',
            elements: [
              'Gimnastyka "zdrowego kręgosłupa"',
              'Wady postawy, skoliozy',
            ],
          },
        ]
      : [
          {
            title: 'Orthopedic physiotherapy',
            elements: [
              'backbone pain of various origins',
              'conditions after injuries (fractures, sprains, dislocations)',
              'shoulder pain (including frozen shoulder), elbow pain (tennis elbow, golfer), pain in the wrists, knees, hips, hocks',
              'conditions after knee and hip arthroplasty',
              'conditions after reconstruction of ACL ligaments, PCL of the knee joint',
              'pain, strains, muscle tears',
              'overloading, overtraining the whole body',
              'degenerative joint changes',
            ],
          },
          {
            title: 'Neurological physiotherapy',
            elements: [
              "neurological diseases (MS, Parkinson's disease, polyneuropathy, cerebellospinal ataxia and others)",
              'states after stroke',
              'states after cerebrospinal injuries',
            ],
          },
          {
            title: 'Urogynaecological physiotherapy',
            elements: [
              'exertional urge incontinence',
              'overactive bladder',
              'reduction of pelvic organs',
              'prolapse of pelvic organs',
              'painful menstruation',
              'white border extinction',
              'prevention and education',
            ],
          },
          {
            title: 'Massage',
            elements: [
              'healing, classic',
              'sporty',
              'lymphatic',
              'Anti-cellulite',
              'relaxation',
              'Chinese bubble',
            ],
          },
          {
            title: 'Other',
            elements: [
              'Gymnastics "healthy spine"',
              'Postural defects, scoliosis',
            ],
          },
        ]

  const [value, setValue] = React.useState(1)

  const handleChange = newValue => {
    setValue(newValue === value ? -1 : newValue)
  }

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
        <br />
        <div className={classes.lower}>
          <div className={classes.items}>
            {items.map((item, i) => (
              <ExpansionPanel
                expanded={value === i}
                onChange={() => handleChange(i)}
                className={classes.expPanel}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header">
                  <Typography className={classes.heading}>
                    {item.title}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.chipList}>
                  {item.elements
                    //.sort((a, b) => a.length - b.length)
                    .map((e, i) => (
                      <Chip
                        color="primary"
                        className={classes.chip}
                        label={e}
                      />
                    ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </div>
          {/* <div className={classes.illustration}>
            <img src={illustration} alt="illustration diseases" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Diseases
