export const REQUEST_FETCH_PRODUCTS = 'REQUEST_FETCH_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

function requestFetchProducts() {
  return {
    type: REQUEST_FETCH_PRODUCTS
  }
}

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json
  }
}

//second way
export function fetchProducts() {
  return dispatch => {
    dispatch(requestFetchProducts())
    // example request
    return fetch({ store: 1, limit: 10, offset:20 })
      //.then(response => response.json())
      //second way dispatcher
      .then(json => dispatch({
        type: RECEIVE_PRODUCTS,
        products: json
      }))
  }
}
