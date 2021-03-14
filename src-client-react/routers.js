import React from 'react'
import { Route, Switch, matchPath } from 'react-router-dom';

import ProductsContainer from './modules/products/products-component';
import OrdersContainer from './modules/orders/components/orders-container';
import LoginContainer from './modules/login/components/login-container';

import CustomerViewMasterLayout from './components/master-layout/customer-view-master-layout'

export const Routes = [
  {
    path: '/products',
    component: ProductsContainer,
    loadDataFnName: 'initProducts',
    masterLayout: CustomerViewMasterLayout
  },
  {
    path: '/orders/:order_id',
    component: OrdersContainer,
    loadDataFnName: 'initOrders'
  },
  {
    path: '/login',
    component: LoginContainer
  }
];

export const renderRouter = () => (
  <div>
    <Switch>
      {Routes.map((x, index) => <Route key={index} path={x.path} component={x.component} />)}
    </Switch>
  </div>
)

