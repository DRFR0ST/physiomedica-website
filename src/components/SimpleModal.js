import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'

export default function SimpleModal({ handleClose, open, children }) {
  return (
    <Dialog
      scroll="body"
      open={open}
      maxWidth=""
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      {children}
      <DialogActions>
        <Button onClick={handleClose} lg color="primary">
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  )
}
