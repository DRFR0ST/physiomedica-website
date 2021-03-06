import React from 'react'
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import contactImage from 'images/undraw_events_2p66.svg'
import { Link } from 'react-router-dom'
import { useLittera } from 'react-littera'
import usePrices from 'utils/usePrices'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '90%',
    margin: '10% 5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  container: {
    textAlign: 'left',
    position: 'relative',
    width: '100%',
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
    marginLeft: '5vw',
    maxWidth: '820px',

    maxHeight: '520px',
  },
  tableCard: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    maxWidth: '100%',
  },
  '@media (max-width: 768px)': {
    root: {
      flexDirection: 'column',
      margin: '20% 5%',
    },
    container: {
      width: '100%',
    },
    image: {
      marginLeft: '0',
      width: '80vw',
      marginBottom: '3rem',
    },
  },
})

const translations = preset => ({
  pricing: preset.menu.pricing,
  service: {
    en_US: 'Service',
    pl_PL: 'Usługa',
  },
  cost: {
    en_US: 'Cost',
    pl_PL: 'Koszt',
  },
  time: {
    en_US: 'Time',
    pl_PL: 'Czas',
  },
  reservation: preset.menu.reservation,
})

const Pricing = ({ classes }) => {
  const [translated] = useLittera(translations)

  const rows = usePrices()

  return (
    <div id="pricing" className={classes.root}>
      <div>
        <img alt="pricing" src={contactImage} className={classes.image} />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          {translated.pricing}
        </Typography>
        <Paper className={classes.tableCard}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>{translated.service}</TableCell>
                <TableCell>{translated.time}</TableCell>
                <TableCell align="right">{translated.cost}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.time ? `${row.time} min` : '-'}</TableCell>
                  <TableCell align="right">{row.cost} zł</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Link style={{ float: 'right', marginTop: '1rem' }} to="/reservation">
          <Button
            size="large"
            variant="contained"
            color="primary"
            align="right">
            {translated.reservation}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default withStyles(styles)(Pricing)
