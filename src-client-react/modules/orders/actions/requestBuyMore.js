import BaseAction from '../../../redux/base-action'
import { post } from '../../../api-base'

export default class requestBuyMore extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))
    const response = await post({
      url: `/orders/${payload.order_id}/products`, formBody: {
        product_id: payload.product_id,
        quantity: 1,
        discount: 0
      }
    })
    console.log(response)
    return { ...payload, ...response.data };
  }

  update(currentState, payload) {
    if (payload.success) {
      const item = currentState.orderDetail.order_items.find(x => x.product_id == payload.product_id);
      item.quantity = item.quantity + 1;
    }
  }
}
