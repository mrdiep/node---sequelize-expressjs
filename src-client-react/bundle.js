import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'
import { BrowserRouter } from 'react-router-dom';


// Read the state sent with markup
const state = window.__PRELOADED_STATE__;

// delete the state from global window object
delete window.__PRELOADED_STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)

render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.querySelector('#root')
)
