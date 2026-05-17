const {readTasks, writeTasks } = require("../storage/db")
function AddTask(title) {
    const tasks = readTasks();
    const newTask ={
        id: tasks.length + 1,
        title,
        status: "todo"
    };
    tasks.push(newTask);
    writeTasks(tasks);
    return newTask;
}