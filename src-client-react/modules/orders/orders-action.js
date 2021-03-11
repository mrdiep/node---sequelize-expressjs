import { fetch } from '../../api-base'

export const REQUEST_FETCH_ORDER_ITEMS_SUCCESS = 'REQUEST_FETCH_ORDER_ITEMS_SUCCESS'
export const REQUEST_ADD_TO_CART = 'REQUEST_ADD_TO_CART'
export const REQUEST_REMOVE_FROM_CART = 'REQUEST_REMOVE_FROM_CART'

function requestAddToCard(product) {
  return {
    type: REQUEST_ADD_TO_CART,
    product
  }
}

function requestRemoveFromCard(product) {
  return {
    type: REQUEST_REMOVE_FROM_CART,
    product
  }
}

export const fetchOrderItems = (productId) => (d) =>
  fetch({ url: `orders/${productId}` }).then(x => d({
    type: REQUEST_FETCH_ORDER_ITEMS_SUCCESS,
    orderDetail: x.data
  }));

