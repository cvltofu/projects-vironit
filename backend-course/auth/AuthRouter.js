import Router from 'express';
import controller from './AuthController.js';
import { check } from 'express-validator';
import AuthMiddleware from './middleware/AuthMiddleware.js';
import RoleMiddleware from './middleware/RoleMiddleware.js';

const router = new Router();

router.post(
    '/registration',
    [
        check('username', 'Username can not be empty').notEmpty(),
        check('password', 'Password length must be 4-10 symbols').isLength({
            min: 4,
            max: 10,
        }),
    ],
    controller.registration
);
router.post('/login', controller.login);
router.get('/users', RoleMiddleware(['ADMIN']), controller.getUsers);

export default router;
