import React from 'react'
import { DialogTitle, DialogContent, IconButton } from '@material-ui/core'

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

const Contact = ({ classes }) => {
  return (
    <React.Fragment>
      <DialogTitle id="alert-dialog-title">{'Kontakt'}</DialogTitle>
      <DialogContent>
        <div className={classes.contactItem}>
          <IconButton>
            <PhoneIcon />
          </IconButton>{' '}
          +48 450 010 420
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
          ul. Wolności 48Z/8, Sokołów Podlaski
        </div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.8180948167465!2d17.908311215739236!3d50.667637879505904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471052fd06a78029%3A0xe65283f3eb819ae3!2sSpychalskiego+32%2C+45-716+Opole!5e0!3m2!1spl!2spl!4v1564168533805!5m2!1spl!2spl"
          width="600"
          height="450"
          title="maps"
          style={{ border: '1px solid #eee', borderRadius: '10px', maxWidth: "100%" }}
          frameborder="0"
          allowfullscreen
        />
      </DialogContent>
    </React.Fragment>
  )
}

export default withStyles(styles)(Contact)
