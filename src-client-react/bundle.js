import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import configureStore from './redux/configureStore'
import { renderRouter} from './routers';

// import 'bootstrap/dist/css/bootstrap.css';
// Read the state sent with markup
const state = window.__PRELOADED_STATE__;

// delete the state from global window object
delete window.__PRELOADED_STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)

render(
  <Provider store={store} >
    <BrowserRouter>
      {renderRouter()}
    </BrowserRouter>,
  </Provider>,
  document.querySelector('#root')
)
