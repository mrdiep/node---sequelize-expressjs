import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import productReducers from '../modules/products/products-reducers'

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      products: productReducers
    }),
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
