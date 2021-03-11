import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Products from '../modules/products/products-component';
import Orders from '../modules/orders/orders-component';

export default props => {
  return (
    <div>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/orders/:orderId" component={Orders} />
      </Switch>
    </div>
  );
};