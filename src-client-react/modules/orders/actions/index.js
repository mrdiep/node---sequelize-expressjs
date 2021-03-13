import requestAddToCard from './requestAddToCard'
import displayLoadingIndicator from './displayLoadingIndicator'
import removeProductFromCart from './removeProductFromCart'
import requestBuyMore from './requestBuyMore'
import searchMoreProduct from './searchMoreProduct'
import updateValue from './updateValue'

const prefix = 'ORDER_MODULE::'

const actionClasses = {
  requestAddToCard: new requestAddToCard(),
  displayLoadingIndicator: new displayLoadingIndicator(),
  removeProductFromCart: new removeProductFromCart(),
  requestBuyMore: new requestBuyMore(),
  searchMoreProduct: new searchMoreProduct(),
  updateValue: new updateValue()
}

export function reducer(state, { type, payload }, immuableState) {
  const classType = type.substring(prefix.length);

  const actionObject = actionClasses[classType];

  console.log(JSON.stringify(payload));
  if (actionObject == null) return;

  actionObject.update(state, payload, immuableState);
}

export function createActionByName(name) {
  return (payload) => {
    return dispatch => {
      const instance = actionClasses[name];
      instance.pushAction = dispatch;
      if (!instance.runMiddleware) {
        dispatch({ type: `${prefix}${name}`, payload });
      }
      else {
        instance.runMiddleware(payload).then(x => {
          dispatch({ type: `${prefix}${name}`, payload: x });
        })
      }
    }
  }
}

export function createWrapActions() {
  const classes = Object.keys(actionClasses);
  return classes.reduce((preValue, currentValue) => {
    preValue[currentValue] = createActionByName(currentValue)
    return preValue;
  }, {});
}