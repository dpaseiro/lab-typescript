// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface'

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
    // anArray: Array < String > =[];
    
    constructor(public tasks: Array<string> = []) { }
        

        addTask(task: string): number {
            this.tasks.push(task);
            return this.tasks.length;
        };
    
        listAllTasks() {
            this.tasks.forEach(function (aTask) {
                console.log(aTask);
            });
    
        
        };
    
        deleteTask(task: string): number {
            
            let that = this;
            
            this.tasks.forEach(function (theTask) {
                let i = 0;
            
                if (theTask === task)
                
                    that.tasks.splice(i, 1);
            
                i++;
            })
            return this.tasks.length;
        }

    








}
    
    
// Execution
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