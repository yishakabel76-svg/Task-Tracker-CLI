const fs = require("fs")
const path = require("path");
const filePath = path.join(__dirname,"task.json");
function ensureFileExists() {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath,
            JSON.stringify([]))
    }
}
function readTasks(){
    ensureFileExists()
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}
function writeTasks(tasks){
    fs.writeFileSync(
        filePath,
        JSON.stringify(tasks,null,2)
    );
}
module.exports = {
    readTasks,
    writeTasks
};