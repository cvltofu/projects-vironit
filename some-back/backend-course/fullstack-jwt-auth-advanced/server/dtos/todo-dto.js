export default class TodoDto {
    date;
    title;
    task;
    id;

    constructor(model) {
        (this.date = model.date),
            (this.title = model.title),
            (this.task = model.task),
            (this.id = model._id);
    }
}
