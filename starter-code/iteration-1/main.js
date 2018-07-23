let anArray = [];
function addTask(task) {
    anArray.push(task);
}
;
function listAllTasks() {
    anArray.forEach(function (aTask) {
        console.log(aTask);
    });
}
;
function deleteTask(task) {
    anArray.forEach(function (theTask) {
        let i = 0;
        if (theTask === task)
            anArray.splice(i, 1);
        i++;
    });
    return anArray.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
