import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {},
  logo: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: "'Montserrat', sans-serif",
    color: theme.palette.primary.contrastText,
    fontSize: '1.5rem',
    letterSpacing: '10px',
    fontWeight: 500,
    cursor: 'pointer',
    userSelect: 'none',
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalPage = withRouter(({ open, history, children, handleClose }) => {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close">
              <CloseIcon />
            </IconButton>
            <div className={classes.logo}>PHYSIOMEDICA</div>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  )
})

export default ModalPage
