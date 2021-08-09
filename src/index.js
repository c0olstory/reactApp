import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import Router from './router/Router'

import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import theme from './theme'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            {/* <Router /> */}
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
