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
import contactImage from 'images/undraw_Calculator_0evy.svg'
import { Link } from 'react-router-dom'

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

function createData(name, cost) {
  return { name, cost }
}

const rows = [
  createData('Masaż częściowy', 159),
  createData('Masaż całościowy', 237),
  createData('Masaż + ćw. indywidualne', 262),
  createData('ćw. indywitualne', 305),
  createData('Fizykoterapia', 356),
  createData('Taping', 356),
]

const Pricing = ({ classes }) => {
  return (
    <div id="pricing" className={classes.root}>
      <div>
        <img alt="pricing" src={contactImage} className={classes.image} />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Cennik
        </Typography>
        <Paper className={classes.tableCard}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Usługa</TableCell>
                <TableCell align="right">Koszt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.cost} zł</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Link style={{ float: 'right', marginTop: '1rem' }} to="/reservation">
          <Button variant="contained" color="primary" align="right">
            Rezerwacja
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default withStyles(styles)(Pricing)
