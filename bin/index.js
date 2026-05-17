#!/usr/bin/env node
const command = process.argv[2];
const args = process.argv[3];
const validCommands = [
    "add",
    "list",
    "delete",
    "update",
    "mark-done",
    "mark-in-progress"
];
if (!validCommands.includes(command)){
    console.log("Unkown command:", command)
    process.exit(1);
} 
console.log("Command Detected: ",command);
console.log("Value: ", args);
