import React, { useState, useEffect } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Route, withRouter, Switch } from 'react-router-dom'
import LitteraProvider from 'react-littera'
import { Home, Reservation } from 'pages'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import ModalPage from 'components/ModalPage'
import BottomNav from '../components/BottomNav'
import SimpleModal from '../components/SimpleModal'
import Contact from '../pages/Contact'
import Diplomas from '../pages/Diplomas'

const TRANS_PRESET = {
  menu: {
    home: {
      en_US: 'Home',
      pl_PL: 'Strona główna',
    },
    about: {
      en_US: 'About me',
      pl_PL: 'O mnie',
    },
    pricing: {
      en_US: 'Pricing',
      pl_PL: 'Cennik',
    },
    contact: {
      en_US: 'Contact',
      pl_PL: 'Kontakt',
    },
    reservation: {
      en_US: 'Reservation',
      pl_PL: 'Rezerwacja',
    },
    discounts: {
      en_US: 'Discounts',
      pl_PL: 'Promocje',
    },
  },
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0cccca',
      light: '#14d9d7',
      dark: '#12b7b5',
      contrastText: '#fff',
    },
    background: {
      light: '#fff',
      dark: '#f4f4f4',
      contrastText: '#212121',
    },
  },
  status: {
    danger: '#BD0000',
  },
})

function App({ history, location }) {
  const [drawerOpen, toggleDrawer] = useState(false)
  const [modalPageOpen, setModalPageOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [language, setLanguage] = useState('pl_PL')

  const goTo = content => {
    //window.location.href = `#`
    //window.location.href = `#${content}`
    if (content)
      document.getElementById(content).scrollIntoView({ block: 'center' })
    else window.scrollTo(0, 0)
    //window.scrollTo(0, window.pageYOffset - 64)
    //history.push();
  }

  useEffect(() => {
    if (['/reservation'].indexOf(location.pathname) > -1 && !modalPageOpen)
      setModalPageOpen(true)
    else setModalPageOpen(false)

    if (['/contact', '/diplomas'].indexOf(location.pathname) > -1 && !modalOpen)
      setModalOpen(true)
    else setModalOpen(false)
  }, [location]) //eslint-disable-line

  return (
    <LitteraProvider
      language={language}
      preset={TRANS_PRESET}
      setLanguage={setLanguage}>
      <ThemeProvider theme={theme}>
        <Navbar
          toggleDrawer={toggleDrawer}
          drawerOpen={drawerOpen}
          goTo={goTo}
        />
        <Switch>
          <Route render={() => <Home />} />
        </Switch>
        <ModalPage
          open={modalPageOpen}
          handleClose={() => {
            setModalPageOpen(false)
            history.push('/')
          }}>
          <Switch>
            <Route path="/reservation" exact component={Reservation} />
          </Switch>
        </ModalPage>
        <SimpleModal
          open={modalOpen}
          handleClose={() => {
            setModalOpen(false)
            history.push('/')
          }}>
          <Switch>
            <Route path="/contact" exact component={Contact} />
            <Route path="/diplomas" exact component={Diplomas} />
          </Switch>
        </SimpleModal>
        <Sidebar
          goTo={goTo}
          toggleDrawer={toggleDrawer}
          drawerOpen={drawerOpen}
        />
        <Footer />
        <BottomNav
          handleChange={e =>
            !isURLExternal(e) ? history.push(e) : (window.location.href = e)
          }
        />
      </ThemeProvider>
    </LitteraProvider>
  )
}

const isURLExternal = url => {
  return Boolean(
    new RegExp(/https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i).exec(url)
  )
}

export default withRouter(App)
