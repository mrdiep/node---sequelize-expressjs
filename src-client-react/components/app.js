import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsContainer from '../modules/products/products-component';
import OrdersContainer from '../modules/orders/components/orders-container';

export default props => {
  return (
    <div>
      <Switch>
        <Route path="/products" component={ProductsContainer} />
        <Route path="/orders/:orderId" component={OrdersContainer} />
      </Switch>
    </div>
  );
};