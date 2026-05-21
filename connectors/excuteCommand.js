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
    "mark-done": markDone,
    list : listTask
};
function executeCommand(parsedCommand,arg = []){
    if(!parsedCommand || !parsedCommand.valid){
        return{error : "Command not found"}
    };
    const action = commandMap[parsedCommand.command];
        if(!action)return {error : "Command not found"};
    const result = action(...(arg||[]));
    return result
}
module.exports = executeCommand;


