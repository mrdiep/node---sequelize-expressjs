import models from '../src/database/models'

import { getOrderById, getOrderByCustomerId } from '../src/services/orderServices'
import { initState as orderInitState } from '../src-client-react/modules/orders/orders-reducers'

export const initOrderDetail = async ({ order_id }) => {
  const orderDetail = await getOrderById({ order_id })

  return { orders: { ...orderInitState, orderDetail, isFetching: true} };
}

export const initOrderList = async (params, authenticatedUser) => {
  console.log('authenticatedUser', authenticatedUser)
  const orders = await getOrderByCustomerId({ customer_id: authenticatedUser.id })


  return { orders: { ...orderInitState, userOrders: orders, isFetching: true} };
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

