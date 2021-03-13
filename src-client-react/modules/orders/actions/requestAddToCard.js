import BaseAction from '../../../redux/base-action'
import { createActionByName } from './index'

import displayLoadingIndicator from './displayLoadingIndicator';

export default class requestAddToCard extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))

    this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: true }));

    const assumeApiResponseData = await new Promise((s, r) => {
      setTimeout(() => {

        this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: false }));
        s(1);
      }, 3000);
    });

    return assumeApiResponseData;
  }

  update(currentState, payload) {
    currentState.cartItemCounter = currentState.cartItemCounter + payload
  }
}
