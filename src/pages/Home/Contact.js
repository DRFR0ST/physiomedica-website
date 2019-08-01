import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import {
  Paper,
  TextField,
  Button,
  Snackbar,
  IconButton,
  SnackbarContent,
} from '@material-ui/core'
import cx from 'classnames'
import { Send as SendIcon } from '@material-ui/icons'
import contactImage from 'images/undraw_contact_us_15o2.svg'
import successImage from 'images/undraw_confirmation_2uy0.svg'
import { useLittera } from 'react-littera'
import ReCAPTCHA from 'react-google-recaptcha'
import { Close as CloseIcon, Warning as WarningIcon } from '@material-ui/icons'
import amber from '@material-ui/core/colors/amber'

const styles = theme => ({
  root: {
    width: '80%',
    margin: '0 10%',
    /* Full height */

    /* Center and scale the image nicely 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    background: 'url(https://source.unsplash.com/Z-lOWIRn2IM/1600x780)',*/

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    margin: '3rem',
    padding: '2rem',
    background: 'transparent',
    borderRadius: '20px',
    boxShadow: 'none',
  },
  input: {
    margin: '1rem 0',
  },
  submit: {
    float: 'right',
  },
  illustration: {
    maxWidth: '50%',
  },
  contactForm: {
    width: '50%',
    position: 'relative',
  },
  '@media (max-width: 768px)': {
    card: {
      width: '95%',
      margin: 'auto',
      boxShadow: 'none',
      padding: '5% 2.5%',
      borderRadius: '10px',
    },
    root: {
      justifyContent: 'center',
      flexDirection: 'column-reverse',
      width: '100%',
      margin: 0,
    },
    contactForm: {
      width: '100%',
    },
    illustration: {
      width: '100%',
      maxWidth: '100%',
    },
  },
  warningSnack: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

const translations = preset => ({
  header: {
    pl_PL: 'Masz pytania?',
    en_US: 'Got questions?',
  },
  slogan: {
    pl_PL: 'Zapraszamy do kontaktu',
    en_US: 'Contact us',
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
    pl_PL: 'Wiadomość',
    en_US: 'Message',
  },
  submit: {
    en_US: 'Submit',
    pl_PL: 'Wyślij',
  },
  thanks: {
    pl_PL: 'Dziękujemy za kontakt!',
    en_US: 'Thank you for contacting us!',
  },
  thanksSlogan: {
    pl_PL: 'Wkrótce dostaniesz odpowiedź na podany adres e-mail.',
    en_US: 'Soon you will get a reply to the e-mail address provided.',
  },
  recaptchaMissing: {
    pl_PL: 'Ukończ weryfikację ReCAPTCHA',
    en_US: 'Complete the ReCAPTCHA verification',
  },
  recaptchaError: {
    pl_PL: 'Wystąpił błąd podczas weryfikacji',
    en_US: 'An error occurred during verification',
  },
  recaptchaExpired: {
    pl_PL: 'Weryfikacja wygasła',
    en_US: 'Verification has expired',
  },
})

const Contact = ({ classes }) => {
  const [translated, language] = useLittera(translations)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputSender, setInputSender] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  const [verified, setVerified] = useState(false)
  const [warning, setWarning] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    if (!verified) {
      setWarning(translated.recaptchaMissing)
      return
    }

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
    } = process.env

    sendFeedback(template, inputSender, inputName, receiverEmail, inputMessage)

    //setFormSubmitted(true)
  }

  const sendFeedback = (
    templateId,
    senderEmail,
    senderName,
    receiverEmail,
    feedback
  ) => {
    window.emailjs
      .send('mailgun', templateId, {
        senderName,
        senderEmail,
        receiverEmail,
        feedback,
      })
      .then(res => {
        setFormSubmitted(true)
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  const handleReCaptcha = v => {
    console.log('Recaptcha', v)
    setVerified(true)
  }

  const handleWarningClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setWarning(null)
  }

  return (
    <div>
      <div id="contact" className={classes.root}>
        <img
          src={formSubmitted ? successImage : contactImage}
          className={classes.illustration}
          alt="contact"
        />
        <div className={classes.contactForm}>
          <Paper className={classes.card}>
            {formSubmitted && (
              <div style={{ textAlign: 'center' }}>
                <h2>{translated.thanks}</h2>
                <p style={{ opacity: 0.7 }}>{translated.thanksSlogan}</p>
              </div>
            )}
            {!formSubmitted && (
              <React.Fragment>
                <h1 style={{ margin: 0, opacity: 0.8 }}>{translated.header}</h1>
                <p style={{ opacity: 0.6, margin: '20px' }}>
                  {translated.slogan}
                </p>

                <form onSubmit={handleSubmit}>
                  <TextField
                    className={cx(classes.input)}
                    fullWidth
                    label={translated.name}
                    value={inputName}
                    onChange={e => setInputName(e.target.value)}
                    variant="outlined"
                    type="text"
                  />
                  <TextField
                    className={cx(classes.input)}
                    type="email"
                    value={inputSender}
                    onChange={e => setInputSender(e.target.value)}
                    fullWidth
                    label={translated.email}
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    className={cx(classes.input)}
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    fullWidth
                    type="text"
                    label={translated.message}
                    multiline
                    rowsMax="5"
                    variant="outlined"
                  />
                  <ReCAPTCHA
                    sitekey="6LdSrrAUAAAAAB3_ETUA4VHDtI4tv1mMGUFbUD3d"
                    onChange={handleReCaptcha}
                    onExpired={() => setWarning(translated.recaptchaExpired)}
                    onErrored={() => setWarning(translated.recaptchaError)}
                    hl={language.split('-')[0]}
                  />
                  <br />
                  <Button
                    size="large"
                    type="submit"
                    variant="outlined"
                    className={classes.submit}>
                    {translated.submit}{' '}
                    <SendIcon
                      style={{ marginLeft: '10px', fontSize: '18px' }}
                    />
                  </Button>
                </form>
                <div style={{ clear: 'both' }} />
              </React.Fragment>
            )}
          </Paper>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={warning}
        autoHideDuration={6000}
        onClose={handleWarningClose}>
        <SnackbarContent
          className={classes.warningSnack}
          message={
            <span id="message-id" className={classes.message}>
              <WarningIcon className={cx(classes.icon, classes.iconVariant)} />{' '}
              {warning}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleWarningClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  )
}

export default withStyles(styles)(Contact)
