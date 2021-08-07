import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import Router from './router/Router'

import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { store } from './store/store'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <Router /> */}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
