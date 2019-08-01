import React from 'react'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core'
import {
  Home as HomeIcon,
  Face as FaceIcon,
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
        <ListItem
          button
          onClick={() => {
            toggleDrawer(false)
            goTo('', true)
          }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={translated.home} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            toggleDrawer(false)
            goTo('about', true)
          }}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary={translated.about} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            toggleDrawer(false)
            goTo('pricing', true)
          }}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={translated.pricing} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            toggleDrawer(false)
            goTo('discounts', true)
          }}>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary={translated.discounts} />
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
