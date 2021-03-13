import Products from './modules/products/products-component';
import Orders from './modules/orders/components/orders-container';

// if server side: use this to fetch data. should use webpack to switch the build condition
import { fetchProducts, fetchOrderItemByOrderId } from '../client-server-data-bridge'

const Routes = [
  {
    path: '/products',
    component: Products,
    loadData: (options) => fetchProducts(options)
  },
  {
    path: '/orders/:order_id',
    component: Orders,
    loadData: (options) => fetchOrderItemByOrderId(options)
  }
];

export default Routes;