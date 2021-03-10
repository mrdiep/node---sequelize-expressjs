import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'


module.exports = function render(req) {
  // Configure the store with the initial state provided
  const initialState = {isFetching: false, products: []} //depend on req
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const finalState = store.getState()

  return { content, finalState };
}
