import todoModel from '../models/todo-model.js';

class TodosService {
    async getTodos() {
        const todos = await todoModel.find();

        return todos;
    }
}

export default new TodosService();
