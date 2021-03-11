import * as Actions from './orders-action';

function apps(state = {isFetching: false, orderItems: []}, action) {
  switch (action.type) {
    case Actions.REQUEST_ADD_TO_CART:
    case Actions.REQUEST_REMOVE_FROM_CART:
    case Actions.REQUEST_FETCH_ORDER_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        orderDetail: action.orderDetail
      });
    default:
      return state
  }
}

export default apps
