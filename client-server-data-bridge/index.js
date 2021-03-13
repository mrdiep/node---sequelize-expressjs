import models from '../src/database/models'

import { getOrderById } from '../src/services/orderServices'
import { initState as orderInitState } from '../src-client-react/modules/orders/orders-reducers'

export const initOrders = async ({ order_id }) => {
  const orderDetail = await getOrderById({ order_id })

  return { orders: { ...orderInitState, orderDetail, isFetching: true} };
}

// do not use this way - import DB models. Correct sample is: import service as sample of Orders
export const initProducts = async () => {
  const products = await models.products.findAll({
    limit: 10,
    include: [
      {
        model: models.stocks,
        as: 'stocks',
        include: [
          {
            model: models.stores,
            as: 'store',
          },
        ],
      },
      {
        model: models.brands,
        as: 'brand',
      },
    ],
  });

  return { products: { isFetching: true, products } };
}

