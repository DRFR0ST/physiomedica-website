import React, { useReducer } from 'react'
import {
  withStyles,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Chip,
  TextField,
  useTheme,
  Button,
} from '@material-ui/core'

const styles = theme => ({
  grid: {
    width: '60%',
  },
  root: {
    height: '300vh',
    padding: '5% 20%',
  },
  title: {
    textTransform: 'uppercase',
  },
  slogan: {
    color: 'rgba(21, 21, 21, 0.4)',
  },
  contact: {
    margin: '2rem 0',
    padding: '20px',
    border: '.5px solid rgba(21, 21, 21, 0.1)',
    position: 'relative',
    borderRadius: '4px',
  },
  formControl: {},
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  '@media (max-width: 768px)': {
    root: {
      padding: '5%',
    },
    contact: {
      margin: '2rem 0',
    },
  },
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const names = [
  'Masaż częściowy',
  'Masaż całościowy',
  'Masaż + ćw. indywidualne',
  'ćw. indywitualne',
  'Fizykoterapia',
  'Taping',
]

const initialState = { name: '', email: '', message: '' }

function reducer(state, action) {
  return { ...state, [action.type]: action.payload }
}

const Reservation = ({ classes }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [items, setItems] = React.useState([])
  const theme = useTheme()


  function handleChange(event) {
    setItems(event.target.value)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3" color="primary">
        Rezerwacja
      </Typography>
      <Typography className={classes.slogan} paragraph>
        Złóż rezerwacje na wygodny, indywidualny termin.
      </Typography>
      <div className={classes.contact}>
        <form
          action={e => {
            e.preventDefault()
            console.log(e)
          }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              variant="outlined"
              value={state.name}
              style={{ width: '48%', margin: '0 0 0 10px 0' }}
              label="Imię i Nazwisko"
              onChange={e =>
                dispatch({ type: 'name', payload: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              value={state.email}
              style={{ margin: '0 10px 0 0 0', width: '48%' }}
              label="Adres E-Mail"
              error={!validateEmail(state.email) && state.email.length > 0}
              success={validateEmail(state.email)}
              type="email"
              onChange={e =>
                dispatch({ type: 'email', payload: e.target.value })
              }
            />
          </div>
          <br />
          <FormControl
            className={classes.formControl}
            style={{ width: '100%' }}>
            <Select
              multiple
              value={items}
              onChange={handleChange}
              label="Wybierz usługi"
              input={
                <TextField
                  fullWidth
                  variant="outlined"
                  id="select-multiple-chip"
                />
              }
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}>
              {names.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, items, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <br />
          <br />
          <TextField
            variant="outlined"
            fullWidth
            multiline
            label="Dodatkowe informacje"
            value={state.message}
            onChange={e =>
              dispatch({ type: 'message', payload: e.target.value })
            }
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            align="right">
            Złóż rezerwacje
          </Button>
        </form>
      </div>
    </div>
  )
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default withStyles(styles)(Reservation)