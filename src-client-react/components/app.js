import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Products from '../modules/products/products-component';

export default props => {
  return (
    <div>
      <Switch>
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
};