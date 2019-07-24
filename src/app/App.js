import React, { useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LitteraProvider from 'react-littera'
import { Home, Reservation, ErrorPage } from 'pages'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import { AnimatedSwitch } from 'react-router-transition'

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
      contrastText: '#212121'
    },
  },
  status: {
    danger: '#BD0000',
  },
  shadowXs: {
    '.z-depth-0': {
      WebkitBoxShadow: 'none !important',
      boxShadow: 'none !important',
    },
    '.z-depth-1': {
      WebkitBoxShadow:
        '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      boxShadow:
        '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
    },
    '.z-depth-1-half': {
      WebkitBoxShadow:
        '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)',
      boxShadow:
        '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)',
    },
    '.z-depth-2': {
      WebkitBoxShadow:
        '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
      boxShadow:
        '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    },
    '.z-depth-3': {
      WebkitBoxShadow:
        '0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
      boxShadow:
        '0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    },
    '.z-depth-4': {
      WebkitBoxShadow:
        '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2)',
      boxShadow:
        '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2)',
    },
    '.z-depth-5': {
      WebkitBoxShadow:
        '0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)',
      boxShadow:
        '0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)',
    },
  },
})

function App() {
  const [drawerOpen, toggleDrawer] = useState(false)
  const [language, setLanguage] = useState('pl_PL')

  const goTo = content => {
    window.location.href = `#`
    window.location.href = `#${content}`
    window.scrollTo(0, window.pageYOffset - 64)
  }

  return (
    <Router basename={process.env.REACT_APP_BASENAME || '/'}>
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
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper">
            <Route path="/" exact component={Home} />
            <Route path="/reservation" exact component={Reservation} />
            <Route component={ErrorPage} />
          </AnimatedSwitch>
          <Sidebar
            goTo={goTo}
            toggleDrawer={toggleDrawer}
            drawerOpen={drawerOpen}
          />
          <Footer />
        </ThemeProvider>
      </LitteraProvider>
    </Router>
  )
}

export default App
