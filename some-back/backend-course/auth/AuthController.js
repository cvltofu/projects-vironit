import Role from './models/Role.js';
import User from './models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import secret from './config.js';

function generateAccessToken(id, roles) {
    const payload = {
        id,
        roles,
    };
    return jwt.sign(payload, secret, { expiresIn: '24h' });
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ message: 'Ошибка при регистрации', errors });
            }

            const { username, password } = req.body;
            const candidate = await User.findOne({ username });

            if (candidate) {
                return res.status(400).json({ message: 'Name exists' });
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({ value: 'USER' });
            const user = new User({
                username,
                password: hashPassword,
                roles: [userRole.value],
            });

            await user.save();
            return res.json({ message: 'User registred' });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration error' });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });

            if (!user) {
                return res
                    .status(400)
                    .json({ message: `User ${username} not found` });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res
                    .status(400)
                    .json({ message: `Password is not valid` });
            }

            const token = generateAccessToken(user._id, user.roles);

            return res.json({ token });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Login error' });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find();

            res.json(users);

            // const userRole = new Role();
            // const adminRole = new Role({ value: 'ADMIN' });

            // await userRole.save();
            // await adminRole.save();
        } catch (e) {}
    }
}

export default new AuthController();
