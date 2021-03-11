import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import productReducers from '../modules/products/products-reducers'
import orderReducers from '../modules/orders/orders-reducers'

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      products: productReducers,
      orders: orderReducers
    }),
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
