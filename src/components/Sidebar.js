import React from 'react'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  withStyles,
} from '@material-ui/core'
import {
  Home as HomeIcon,
  Phone as PhoneIcon,
  Face as FaceIcon,
  Help as HelpIcon,
  Grade as GradeIcon,
} from '@material-ui/icons'
import { useLittera } from 'react-littera'

const styles = theme => ({
  fullList: {
    width: '100%',
  },
})

const translations = {
  home: {
    en_US: 'Home',
    pl_PL: 'Strona główna',
  },
  about: {
    en_US: 'About',
    pl_PL: 'O nas',
  },
  contact: {
    en_US: 'Contact',
    pl_PL: 'Kontakt',
  },
  reservation: {
    en_US: 'Reservation',
    pl_PL: 'Rezerwacja',
  },
  help: {
    en_US: 'Help',
    pl_PL: 'Pomoc',
  },
}

const Sidebar = ({ toggleDrawer, drawerOpen, classes, goTo }) => {
  const [translated] = useLittera(translations)

  const fullList = (
    <div
      className={classes.fullList}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}>
      <List>
        <ListItem button onClick={() => goTo('')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={translated.home} />
        </ListItem>
        <ListItem button onClick={() => goTo('about')}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary={translated.about} />
        </ListItem>
        <ListItem button onClick={() => goTo('contact')}>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={translated.contact} />
        </ListItem>
        <ListItem button onClick={() => goTo('reservation')}>
          <ListItemIcon>
            <GradeIcon />
          </ListItemIcon>
          <ListItemText primary={translated.reservation} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary={translated.help} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <SwipeableDrawer
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
      PaperProps={{ style: { width: '70%' } }}>
      {fullList}
    </SwipeableDrawer>
  )
}

export default withStyles(styles)(Sidebar)
