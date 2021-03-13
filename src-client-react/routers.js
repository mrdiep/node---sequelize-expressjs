import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Products from './modules/products/products-component';
import Orders from './modules/orders/components/orders-container';

export const Routes = [
  {
    path: '/products',
    component: Products,
    loadDataFnName: 'initProducts'
  },
  {
    path: '/orders/:order_id',
    component: Orders,
    loadDataFnName: 'initOrders'
  }
];

export const renderRouter = () => (
  <div>
    Hello, this is the demo, this is the master layout:: top menu will display here
    <br/>
  <Switch>
    {Routes.map((x, index) => <Route key={index} path={x.path} component={x.component} />)}
  </Switch>
  </div>
  )

