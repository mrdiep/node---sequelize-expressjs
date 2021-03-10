import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Products from './product-component';

export default props => {
  return (
    <div>
      <Switch>
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
};