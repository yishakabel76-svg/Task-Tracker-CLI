const command = process.argv[2];
const args = process.argv.slice(3);
const validCommands = [
    "add",
    "list",
    "delete",
    "update",
    "mark-done",
    "mark-in-progress"
];
function parsedCommand(){
    if (!validCommands.includes(command, args)){
        return {
            valid : false,
            command : null,
            args: null
        }
    } 
    return {
        valid : true,
        command,
        args
    }
}
module.exports = parsedCommand;