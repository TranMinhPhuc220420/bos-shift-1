import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from "react-router";

// Styles
import './index.css'
// I18n
import './locales'
// Firebase
import './firebase';
// Redux
import { store } from './store'
import { Provider } from 'react-redux'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        {/* <React.StrictMode> */}
        <App />

      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
