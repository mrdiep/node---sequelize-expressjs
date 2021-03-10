import Products from './modules/products/products-component';

// if server side: use this to fetch data
import { fetchProducts } from '../client-server-data-bridge'

const Routes = [
  {
    path: '/products',
    component: Products,
    loadData: () => fetchProducts({options: {limit:10}})
  }
];

export default Routes;