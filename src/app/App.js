import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LitteraProvider from 'react-littera'
import { Home } from 'pages'

const theme = createMuiTheme({
  status: {
    danger: '#BD0000',
  },
})

function App() {
  return (
    <LitteraProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </LitteraProvider>
  )
}

export default App
