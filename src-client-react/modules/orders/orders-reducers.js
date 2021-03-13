import { fromJS } from "immutable";

import * as Actions from './orders-action';
import { reducer } from './actions'

const initState = {
  isFetching: false,
  orderDetail: null,
  cartItemCounter: 0,
  showLoadingIndicator: false
}

function apps(state = initState, action) {
  const newState = fromJS(state).toJS();

  switch (action.type) {
    case Actions.REQUEST_ADD_TO_CART:
      // another dev will do this
    case Actions.REQUEST_REMOVE_FROM_CART:
       // another dev will do this
    case Actions.REQUEST_FETCH_ORDER_ITEMS_SUCCESS:
      // simple way: avoid this
      return Object.assign({}, state, {
        isFetching: true,
        orderDetail: action.orderDetail
      });
    // default:
    //   return state
  }

  reducer(newState, action);

  return newState;
}

export default apps
