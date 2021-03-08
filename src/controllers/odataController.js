// note: should not implement the bussiness logic here.
// refer orderController

import models from '../database/models';

export const getAll = async (req, res) => {
  try {
    // odata/orders?offset=10&limit=2&order=staff_id&attributes=order_id,customer_id,staff_id
    // refer: https://sequelize.org/master/manual/model-querying-basics.html
    // url=attributes=c1,c2,c3&where=(id eq 1 and age gt 2) or
    const tableName = req.params.tableName;
    const attributes = req.query.attributes?.split(',');
    // const where = req.query.
    const order = req.query.order?.split(',');
    const limit = parseInt(req.query.limit || '0');
    const offset = parseInt(req.query.offset || '0');

    const items = await models[tableName].findAll({attributes, order, limit, offset});
    return res.status(200).json({[tableName]: items});
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
