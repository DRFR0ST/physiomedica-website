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
  Face as FaceIcon,
  Help as HelpIcon,
  AttachMoney as AttachMoneyIcon,
  LocalOffer as LocalOfferIcon,
} from '@material-ui/icons'
import { useLittera } from 'react-littera'

const styles = theme => ({
  fullList: {
    width: '100%',
  },
})

const translations = preset => ({
  ...preset.menu,
  help: {
    en_US: 'Help',
    pl_PL: 'Pomoc',
  },
})

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
        <ListItem button onClick={() => goTo('pricing')}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={translated.pricing} />
        </ListItem>
        <ListItem button onClick={() => goTo('discounts')}>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary={translated.discounts} />
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
