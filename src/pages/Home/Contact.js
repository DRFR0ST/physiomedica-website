import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/styles'
import { Paper, TextField, Button } from '@material-ui/core'
import cx from 'classnames'
import { Send as SendIcon } from '@material-ui/icons'
import GoogleMapsLoader from 'google-maps'

const styles = theme => ({
  root: {
    width: '100%',
    /* Full height */
    minHeight: '600px',

    /* Center and scale the image nicely 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    background: 'url(https://source.unsplash.com/Z-lOWIRn2IM/1600x780)',*/

    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    boxShadow:
      'inset 0px 1px 5px 0px rgba(0,0,0,0.2), inset 0px 2px 2px 0px rgba(0,0,0,0.14), inset 0px 3px 1px -2px rgba(0,0,0,0.12)',
  },
  iframe: {
    width: '100%',
    height: '600px',
    top: 0,
    left: 0,
    zIndex: 5,
  },
  card: {
    width: '40%',
    margin: '3rem',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    boxShadow: 'none',
    zIndex: 6,
  },
  input: {
    margin: '1rem 0',
  },
  submit: {
    float: 'right',
  },
  '@media (max-width: 768px)': {
    card: {
      width: '90%',
      margin: 'auto',
      boxShadow: 'none',
      padding: '5% 4%',
      borderRadius: '10px',
    },
    root: {
      justifyContent: 'center',
    },
  },
})

const Contact = ({ classes }) => {
  useEffect(() => {
    GoogleMapsLoader.KEY = 'AIzaSyBd_DMbAc8aWy0Mei-WHdcooREVGhyst0I'
    GoogleMapsLoader.VERSION = '3.14'
    GoogleMapsLoader.load(
      google =>
        new google.maps.Map(document.getElementById('map-canvas'), {
          center: { lat: 52.4076066, lng: 22.231705 },
          zoom: 17,
        })
    )
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <div id="map-canvas" style={{ width: '100%', height: '600px' }} />
      <div id="contact" className={classes.root}>
        <Paper className={classes.card}>
          <h1 style={{ margin: 0, opacity: 0.8 }}>KONTAKT</h1>
          <p style={{ opacity: 0.6, margin: 0 }}>Zapraszamy do kontaktu</p>
          <TextField
            className={cx(classes.input)}
            fullWidth
            placeholder="Imię i Nazwisko"
            variant="filled"
            type="email"
          />
          <TextField
            className={cx(classes.input)}
            fullWidth
            placeholder="E-Mail"
            variant="filled"
          />
          <br />
          <TextField
            className={cx(classes.input)}
            fullWidth
            placeholder="Wiadomość"
            multiline
            variant="filled"
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
