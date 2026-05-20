const {readTasks, writeTasks } = require("../storage/db")
function addTask(title) {
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
function updateTask(id, title) {
    const tasks = readTasks();

    const task = tasks.find(t => t.id === id);
    if(!task)return null;
    task.title = title;
    writeTasks(tasks);
    return task;
}
function deleteTask(id){
    let tasks = readTasks()
    tasks = tasks.filter(t =>  t.id !== id);
    writeTasks(tasks)

}
function markDone(id){
    const tasks = readTasks()
    const task = tasks.find(t => t.id === id);
    if(!tasks)return null;
    task.status = "done";
    writeTasks(tasks);
    return task
}
function markInProgress(id){
    const tasks = readTasks()
    const task = tasks.find(t => t.id === id);
    if(!tasks)return null;
    task.status = "In Progress";
    writeTasks(tasks);
    return task
}
function listTask(filter){
    tasks = readTasks()
    if(!filter) return tasks;
    return tasks.filter(t => t.status === filter);
}
module.exports = {
    addTask,
    updateTask,
    deleteTask,
    markInProgress,
    markDone,
    listTask
};