import TodoDto from '../dtos/todo-dto.js';
import todoModel from '../models/todo-model.js';

class TodosService {
    async getTodos() {
        const todos = await todoModel.find();

        return todos;
    }

    async postTodos(date, title, task) {
        const todo = await todoModel.create({
            date,
            title,
            task,
        });

        const todoDto = new TodoDto(todo);

        return { todo: todoDto };
    }
}

export default new TodosService();
