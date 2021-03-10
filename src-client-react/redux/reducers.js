import { REQUEST_FETCH_PRODUCTS,  RECEIVE_PRODUCTS } from './actions';

function apps(state = {isFetching: false, products: []}, action) {
  switch (action.type) {
    case REQUEST_FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products
      });
    default:
      return state
  }
}

export default apps
