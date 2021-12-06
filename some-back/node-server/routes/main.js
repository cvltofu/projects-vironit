import { Router } from '../core/Router.js';
import { goodsRouter } from './goods.js';
import { usersRouter } from './users.js';

export const router = new Router();

router.use('users', usersRouter);
router.use('goods', goodsRouter);
