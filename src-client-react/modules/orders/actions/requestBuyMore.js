import BaseAction from '../../../redux/base-action'
import { post, fetch } from '../../../api-base'

export default class requestBuyMore extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))
    const addResponse = await post({
      url: `/orders/${payload.order_id}/products`, formBody: {
        product_id: payload.product_id,
        quantity: 1,
        discount: 0
      }
    })

    let orderItemResponse = null;

    if (addResponse.data.success) {
      orderItemResponse = await fetch({ url: `/orders/${payload.order_id}` })
    }

    return { ...payload, ...addResponse.data, orderDetail: orderItemResponse?.data };
  }

  update(currentState, payload) {
    if (payload.success) {
      const item = currentState.orderDetail.order_items.find(x => x.product_id == payload.product_id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        currentState.orderDetail = payload.orderDetail;
      }
    }
  }
}
