// / sample posts for routers
// / action: create the post, edit the post, update the post, delete the post
import {Router} from 'express';
import {generic as genericController} from '../controllers';

const router = Router();
router.get('/', genericController.getAll);
export default router;
