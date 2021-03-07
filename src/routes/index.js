
import {Router} from 'express';
import {v4 as uuidv4} from 'uuid';

import productRouter from './productRouter';
import genericRouter from './genericRouter';
import orderRouter from './orderRouter';

const router = Router();
router.get('/', (req, res) => {
  const countTo = parseInt(req.query.countTo);

  let sampleIncreasementIndex = 0;
  const id =uuidv4();
  console.time(id + '::' + countTo);
  for (let x = 0; x < parseInt(countTo); x++) {
    sampleIncreasementIndex++;
  }

  console.timeEnd(id + '::' + countTo);
  res.send('Sample testing the CPU working. Counter:' + sampleIncreasementIndex);
});

router.use('/products', productRouter);
router.use('/generic-data', genericRouter);
router.use('/orders', orderRouter);
// add more bussiness router bellow, do not mixed router

export default router;
