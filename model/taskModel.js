function createTask(id,title){
    return{
        id ,
        title,
        status : "todo",
        createdAt : new Date(),
        updateAt : new Date()
    };
}
module.exports = {
    createTask
};
