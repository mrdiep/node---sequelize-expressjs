import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken'

const cookies = new Cookies();
import configureStore from './redux/configureStore'
import { renderRouter } from './routers';
import { initState as loginInitState } from './modules/login/login-reducers'
// import 'bootstrap/dist/css/bootstrap.css';
// Read the state sent with markup
const state = window.__PRELOADED_STATE__;

// delete the state from global window object
delete window.__PRELOADED_STATE__;

const token = cookies.get('auth');

const decodeToken = jwt.decode(token);
if (!!decodeToken && new Date(decodeToken.exp * 1000) > new Date()) {

  const staffInfoJson = localStorage.getItem('staffInfo');
  const customerInfoJson = localStorage.getItem('customerInfo');

  state.loginInfo = {
    ...loginInitState,
    userIdentity: {
      token: token,
      staffInfo: !!staffInfoJson && JSON.parse(staffInfoJson),
      customerInfo: !!customerInfoJson && JSON.parse(customerInfoJson),
      authenticated: !!token
    }
  }
}

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
