export class BaseAction {
  pushAction = null
}

export class requestAddToCard extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))

    const assumeApiResponseData = await new Promise((s, r) => {
      setTimeout(() => {
        s('done.hehe');
      }, 3000);
    });

    return assumeApiResponseData;
  }

  update(currentState, payload) {
    currentState.testNumber = payload.assumeApiResponseData
  }
}

const actionClasses = {
  requestAddToCard: new requestAddToCard()
}

function createActionByName(name) {
  return (payload) => {
    return dispatch => {
      const instance = actionClasses[name];
      instance.pushAction = dispatch;
      instance.runMiddleware(payload).then(x => {
        dispatch({type: name, payload: x});
      })
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
