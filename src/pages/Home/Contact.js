import React from 'react'
import { withStyles } from '@material-ui/styles'
import { Paper, TextField, Button } from '@material-ui/core'
import cx from 'classnames'
import { Send as SendIcon } from '@material-ui/icons'
import contactImage from 'images/undraw_contact_us_15o2.svg'

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
    illustration: {
      width: '100%',
      maxWidth: '100%',
    },
  },
})

const Contact = ({ classes }) => {
  return (
    <div id="contact" className={classes.root}>
      <img src={contactImage} className={classes.illustration} alt="contact" />
      <div className={classes.contactForm}>
        <Paper className={classes.card}>
          <h1 style={{ margin: 0, opacity: 0.8 }}>Masz pytania?</h1>
          <p style={{ opacity: 0.6, margin: 0 }}>Zapraszamy do kontaktu</p>
          <TextField
            className={cx(classes.input)}
            fullWidth
            label="Imię i Nazwisko"
            variant="outlined"
            type="email"
          />
          <TextField
            className={cx(classes.input)}
            fullWidth
            label="Adres E-Mail"
            variant="outlined"
          />
          <br />
          <TextField
            className={cx(classes.input)}
            fullWidth
            label="Wiadomość"
            multiline
            variant="outlined"
          />
          <Button size="large" variant="outlined" className={classes.submit}>
            Wyślij <SendIcon style={{ marginLeft: '10px', fontSize: '18px' }} />
          </Button>
          <div style={{ clear: 'both' }} />
        </Paper>
      </div>
    </div>
  )
}

export default withStyles(styles)(Contact)
