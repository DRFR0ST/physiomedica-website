import React from 'react'
import { DialogTitle, DialogContent, IconButton } from '@material-ui/core'
import { useLittera } from 'react-littera'

import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Place as PlaceIcon,
} from '@material-ui/icons'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiIconButton-root': {
      marginRight: '5px',
    },
  },
})

const translations = preset => ({
  contact: preset.menu.contact,
})

const Contact = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <React.Fragment>
      <DialogTitle id="alert-dialog-title">{translated.contact}</DialogTitle>
      <DialogContent>
        <div className={classes.contactItem}>
          <IconButton>
            <PhoneIcon />
          </IconButton>{' '}
          +48 509 816 932
        </div>
        <div className={classes.contactItem}>
          <IconButton>
            <EmailIcon />
          </IconButton>{' '}
          kontakt@physiomedica.eu
        </div>
        <div className={classes.contactItem}>
          <IconButton>
            <PlaceIcon />
          </IconButton>{' '}
          {'Ul. Wokulskiego lok.1/4a'}
          {'08-300 Sokołow Podlaski'}
        </div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9486654471634!2d22.23017051580326!3d52.407606579793004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f6c087894e983%3A0x20dff4fff9650eb6!2sWokulskiego+1%2C+08-300+Soko%C5%82%C3%B3w+Podlaski!5e0!3m2!1sen!2spl!4v1564443303077!5m2!1sen!2spl"
          width="600"
          height="450"
          title="maps"
          style={{
            border: '1px solid #eee',
            borderRadius: '10px',
            maxWidth: '100%',
          }}
          frameborder="0"
          allowfullscreen
        />
      </DialogContent>
    </React.Fragment>
  )
}

export default withStyles(styles)(Contact)
