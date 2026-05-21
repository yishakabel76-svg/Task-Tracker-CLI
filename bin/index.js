#!/usr/bin/env node
const praseCommand = require("../prasing/parser")
const executeCommand = require("../connectors/excuteCommand")
function main(){
    const prased = praseCommand();
    const result = executeCommand(prased , prased.args);
    if(Array.isArray(result)){
        console.log(JSON.stringify(result, null, 2));
        process.exit(1);
    }else{
        console.log(result);
    }
    
}
main();