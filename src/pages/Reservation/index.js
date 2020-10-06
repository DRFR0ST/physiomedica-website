import React, { useReducer, useState, useEffect } from 'react'
import {
  withStyles,
  Typography,
  Select,
  MenuItem,
  Chip,
  TextField,
  useTheme,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { useLittera } from 'react-littera'

import ReCAPTCHA from 'react-google-recaptcha'

import successImage from 'images/undraw_confirmation_2uy0.svg'
import { green } from '@material-ui/core/colors'

import usePrices from "utils/usePrices";

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

  buttonWrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    display: "inline-block"
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
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

const translations = preset => ({
  reservation: preset.menu.reservation,
  slogan: {
    pl_PL: 'Złóż rezerwacje na wygodny, indywidualny termin.',
    en_US: 'Make reservations for a convenient, individual date.',
  },
  name: {
    pl_PL: 'Imię i Nazwisko',
    en_US: 'Name and Surname',
  },
  email: {
    pl_PL: 'Adres E-Mail',
    en_US: 'E-Mail Address',
  },
  message: {
    pl_PL: 'Dodatkowe informacje',
    en_US: 'Additional information',
  },
  submit: {
    pl_PL: 'Złóż rezerwacje',
    en_US: 'Make reservations',
  },
  services: {
    pl_PL: 'Wybierz usługi',
    en_US: 'Select services',
  },
  service01: {
    pl_PL: 'Masaż częściowy',
    en_US: 'Partial massage',
  },
  service02: {
    pl_PL: 'Masaż całościowy',
    en_US: 'Whole massage',
  },
  service03: {
    pl_PL: 'Masaż + ćw. indywidualne',
    en_US: 'Massage + individual exercise',
  },
  service04: {
    pl_PL: 'ćw. indywidualne',
    en_US: 'individual exercises',
  },
  service05: {
    pl_PL: 'Fizykoterapia',
    en_US: 'Physiotherapy',
  },
  service06: {
    pl_PL: 'Taping',
    en_US: 'Taping',
  },
  sentText: {
    pl_PL:
      'Zostaniesz powiadomiony o dostępnych terminach na podany adres e-mail.',
    en_US:
      'You will be notified of available dates to the e-mail address provided.',
  },
  sentTitle: {
    pl_PL: 'Rezerwacja wysłana!',
    en_US: 'Reservation sent!',
  },
  totalCost: {
    pl_PL: 'Całkowity koszt',
    en_US: 'Total cost',
  },
})

const initialState = { name: '', email: '', message: '' }

function reducer(state, action) {
  return { ...state, [action.type]: action.payload }
}

const Reservation = ({ classes }) => {
  const [translated, language] = useLittera(translations)
  const names = usePrices();
  const [state, dispatch] = useReducer(reducer, initialState)
  const [items, setItems] = React.useState([])
  const theme = useTheme()
  const [verified, setVerified] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

  function handleChange(event) {
    setItems(event.target.value)
  }

  /* eslint-disable */
  useEffect(() => {
    if (
      state.name &&
      state.email &&
      items.length !== 0 &&
      verified &&
      validateEmail(state.email)
    )
      setDisabled(false)
    else setDisabled(true)
  }, [items.length, state.email, state.name, verified])
  /* eslint-enable */

  const handleReCaptcha = v => 
    setVerified(true)
  

  const handleSubmit = e => {
    e.preventDefault()

    const { REACT_APP_EMAILJS_RECEIVER: receiverEmail } = process.env

    const template = 'reservation_template'

    const totalCost = items
      .map(item => names.find(name => name.name === item).price)
      .reduce((a, b) => a + b, 0)
    const totalTime = items
      .map(item => names.find(name => name.name === item).time)
      .reduce((a, b) => a + b, 0)

    setFormSubmitting(true)

    sendFeedback(
      template,
      state.name,
      state.email,
      items
        .map(e => `${e} (${names.find(x => e === x.name).cost} zł)`)
        .join(', '),
      `${totalCost} zł`,
      `${totalTime} min`,
      state.message,
      receiverEmail
    )
  }

  const sendFeedback = (
    templateId,
    senderName,
    senderEmail,
    services,
    totalCost,
    totalTime,
    message,
    receiverEmail
  ) => {
    window.emailjs
      .send('mailgun', templateId, {
        senderName,
        senderEmail,
        services,
        totalCost,
        totalTime,
        message,
        receiverEmail,
      })
      .then(res => {
        setFormSubmitted(true)
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  return (
    <div className={classes.root}>
      {formSubmitted && (
        <div style={{ textAlign: 'center', margin: '2.5% 0' }}>
          <Typography className={classes.title} variant="h3" color="primary">
            {translated.sentTitle}
          </Typography>
          <Typography className={classes.slogan} paragraph>
            {translated.sentText}
          </Typography>
          <Typography className={classes.slogan} paragraph>
            {state.email}
          </Typography>
          <br />
          <img style={{ maxWidth: '675px', width: "100%" }} src={successImage} alt="contact" />
        </div>
      )}
      {!formSubmitted && (
        <React.Fragment>
          <Typography className={classes.title} variant="h3" color="primary">
            {translated.reservation}
          </Typography>
          <Typography className={classes.slogan} paragraph>
            {translated.slogan}
          </Typography>
          <div className={classes.contact}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                  variant="outlined"
                  value={state.name}
                  required
                  disabled={formSubmitting && !formSubmitted}
                  style={{ width: '48%', margin: '0 0 0 10px 0' }}
                  label={translated.name}
                  onChange={e =>
                    dispatch({ type: 'name', payload: e.target.value })
                  }
                />
                <TextField
                  required
                  variant="outlined"
                  disabled={formSubmitting && !formSubmitted}
                  value={state.email}
                  style={{ margin: '0 10px 0 0 0', width: '48%' }}
                  label={translated.email}
                  error={!validateEmail(state.email) && state.email.length > 0}
                  success={validateEmail(state.email)}
                  type="email"
                  onChange={e =>
                    dispatch({ type: 'email', payload: e.target.value })
                  }
                />
              </div>
              <br />
              <Select
                required
                multiple
                value={items}
                onChange={handleChange}
                label={translated.services}
                disabled={formSubmitting && !formSubmitted}
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
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}>
                {names.map(e => (
                  <MenuItem
                    key={e.name}
                    value={e.name}
                    style={getStyles(e.name, items, theme)}>
                    <p>
                      {e.name}
                      {' - '}
                      {e.cost} zł
                    </p>
                  </MenuItem>
                ))}
              </Select>
              <br />
              <p style={{ textAlign: 'right' }}>
                {`${translated.totalCost}: `}
                <b>
                  {items
                    .map(e => names.find(x => x.name === e).cost)
                    .reduce((a, b) => a + b, 0)}{' '}
                  zł
                </b>
              </p>

              <br />
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label={translated.message}
                value={state.message}
                disabled={formSubmitting && !formSubmitted}
                onChange={e =>
                  dispatch({ type: 'message', payload: e.target.value })
                }
              />
              <br />
              <br />
              <ReCAPTCHA
                sitekey="6LdSrrAUAAAAAB3_ETUA4VHDtI4tv1mMGUFbUD3d"
                onChange={handleReCaptcha}
                hl={language.split('-')[0]}
              />
              <br />
              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={disabled || (formSubmitting && !formSubmitted)}
                  type="submit"
                  align="right">
                  {translated.submit}
                </Button>
                {formSubmitting && !formSubmitted && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </form>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default withStyles(styles)(Reservation)
