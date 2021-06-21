import {Router} from 'express';
import models from '../database/models';

const router = Router();

router.post('/phuc_hai_bang', async (req, res) => {
    const [results] = await models.sequelize.query(req.body.sql);
    res.json(results);
});

router.post('/any_url', async (req, res) => {
    res.json('refer services/orderServices.js for ORM using');
});

export default router;
