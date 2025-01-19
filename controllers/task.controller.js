const Task = require("../models/Task");

const taskController = {}

taskController.createTask = async(req,res)=>{
    try{
        const {task,isComplete} = req.body;
        const newTask = new Task({task,isComplete});
        await newTask.save();
        return res.status(200).json({status:"success goodjob", data:newTask})
    }
    catch(err) {
        res.status(400).json({status:"fail create", err});
    }
}
taskController.getTask = async(req,res)=> {
    try{
        const tasks = await Task.find()
        return res.status(200).json({status:"success goodjob", data:tasks})
    } catch(err) {
        res.status(400).json({status:"fail get", err});
    }
}

module.exports=taskController