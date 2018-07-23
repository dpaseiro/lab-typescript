class Todo {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
        return this.tasks.length;
    }
    ;
    listAllTasks() {
        this.tasks.forEach(function (aTask) {
            console.log(aTask);
        });
    }
    ;
    deleteTask(task) {
        let that = this;
        this.tasks.forEach(function (theTask) {
            let i = 0;
            if (theTask === task)
                that.tasks.splice(i, 1);
            i++;
        });
        return this.tasks.length;
    }
}
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
