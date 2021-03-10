import models from '../src/database/models'
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

    return { isFetched: true, products };
}

