import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath  } from 'react-router-dom';

import configureStore from './redux/configureStore'
import { Routes, renderRouter} from './routers';
import * as loadServerSideData from '../client-server-data-bridge'

export default async (req) => {
  console.log(req.url);

  const matches = Routes
  .map(route => ({matchValue: matchPath(req.url, route), route}))
  .filter(x => x.matchValue)

  if (matches.length == 0) {
    return {match: false};
  }

  const currentRoute = matches[0];

  console.log(currentRoute.matchValue)

  const loadInitData = loadServerSideData[currentRoute.route.loadDataFnName];

  let initialState  = {}
  if (loadInitData) {
    initialState  = await loadInitData(currentRoute.matchValue.params, req.authenticatedUser);
  }
  
  const store = configureStore(initialState)
  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url}>
         {renderRouter()}
      </StaticRouter>
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const finalState = store.getState()

  return { content, finalState, match: true };
}
