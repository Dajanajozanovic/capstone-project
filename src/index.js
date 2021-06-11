import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'
import GlobalStyle from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
