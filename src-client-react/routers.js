import React from 'react'
import { Route, Switch, matchPath } from 'react-router-dom';

import ProductsContainer from './modules/products/products-component';
import OrderDetailContainer from './modules/orders/components/order-detail-container';
import OrderListContainer from './modules/orders/components/order-list-container';

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
    component: OrderDetailContainer,
    loadDataFnName: 'initOrderDetail'
  },
  {
    path: '/orders',
    component: OrderListContainer,
    loadDataFnName: 'initOrderList'
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

