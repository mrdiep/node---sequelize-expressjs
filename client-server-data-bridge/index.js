//export const fetchProducts = async () => {return { products: { isFetched: false, products:[] } }}
import models from '../src/database/models'

import {getOrderById} from '../src/services/orderServices'

// do not use this way: import service as sample bellow
export const fetchProducts = async () => {
    const products = await models.products.findAll({
        limit:10,
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

export const fetchOrderItemByOrderId = async ({order_id}) => {
    const orderDetail = await getOrderById({order_id})

    return { orders: { isFetching: true, orderDetail } };
}