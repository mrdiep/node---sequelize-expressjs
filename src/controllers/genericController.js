// note: should not implement the bussiness logic here.
// refer orderController

import models from '../database/models';

export const getAll = async (req, res) => {
  try {
    const tableName = req.query.table;
    const items = await models[tableName].findAll({});
    return res.status(200).json({[tableName]: items});
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
