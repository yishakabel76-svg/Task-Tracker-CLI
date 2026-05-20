const {
    addTask,
    updateTask,
    deleteTask,
    markInProgress,
    markDone,
    listTask
} = require("../services/taskService");
const commandMap = {
    add : addTask,
    update : updateTask,
    delete : deleteTask,
    "mark-in-progress" : markInProgress,
    "markDone" : markDone,
    list : listTask
};
function executeCommand(parsedCommand, args = []){
    if(!prasedCommand || !prasedCommand.valid){
        return{error : "Command not found"}
    };
    const action = commandMap[parsedCommand.command];
        if(!action)return {error : "Command not found"};
    return action(...args);
}
module.export = executeCommand;


