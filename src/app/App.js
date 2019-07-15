import React, { useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LitteraProvider from 'react-littera'
import { Home } from 'pages'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

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
    },
  },
  status: {
    danger: '#BD0000',
  },
})

function App() {
  const [drawerOpen, toggleDrawer] = useState(false)

  const goTo = content => {
    window.location.href = `#`
    window.location.href = `#${content}`
    window.scrollTo(0, window.pageYOffset - 64)
  }

  return (
    <LitteraProvider language="pl_PL">
      <ThemeProvider theme={theme}>
        <Navbar
          toggleDrawer={toggleDrawer}
          drawerOpen={drawerOpen}
          goTo={goTo}
        />
        <Router basename={process.env.REACT_APP_BASENAME || '/'}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
        <Sidebar
          goTo={goTo}
          toggleDrawer={toggleDrawer}
          drawerOpen={drawerOpen}
        />
      </ThemeProvider>
    </LitteraProvider>
  )
}

export default App
