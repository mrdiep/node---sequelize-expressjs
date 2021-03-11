import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'
import { StaticRouter, matchPath  } from 'react-router-dom';
import Routes from './routers';

export default async (req) => {
  // Configure the store with the initial state provided
  //const initialState = { isFetching: false, products: [] } //depend on req
  console.log(req.url);
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};

  const initialState  = await currentRoute.loadData(req.params);

  const store = configureStore(initialState)
  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const finalState = store.getState()

  return { content, finalState };
}
