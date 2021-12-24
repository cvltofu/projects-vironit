import todosService from '../services/todos-service.js';

class TodoController {
    async getTodos(req, res, next) {
        try {
            const todos = await todosService.getTodos();

            return res.json(todos);
        } catch (e) {
            next(e);
        }
    }
}

export default new TodoController();
