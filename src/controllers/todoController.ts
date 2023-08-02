import { Request,Response } from "express";
import{
    createTask,
    findTasks,
    findTaskById,
    updateTasksById,
    deleteTasksById
} from "../models/todoModel"


export async function createTaskController (req:Request,res:Response):Promise<void> {
    try {
        const taskName:string=req.body.taskName
        if(!taskName){
            throw Error("Task Name cant be empty")
        }
        const result= await createTask(taskName)
        res.status(201).json({ task: result, message: 'Task created successfully' });
    } catch (error:any) {
        res.status(400).json({ error:error.message });
    }
}

export async function findAllTasksController (req:Request,res:Response):Promise<void> {
    try {

        const result= await findTasks()
        res.status(200).json({ task: result, message: `Tasks count ${result.length}` });
    } catch (error:any) {
        res.status(400).json({ error:error.message });
    }
}

export async function findTasksByIdController (req:Request,res:Response):Promise<void> {
    try {
        const id:number=parseInt(req.params.id,10)
        
        const result= await findTaskById(id)
        if(result)
        {
            res.status(200).json({ task: result, message: `Task found` });
        }
        else{
            res.status(404).json({ task: result, message: `Task not found` });
        }
    } catch (error:any) {
        res.status(400).json({ error:error.message });
    }
}

export async function UpdateTasksByIdController (req:Request,res:Response):Promise<void> {
    try {
        const id:number=parseInt(req.params.id,10)
        const status:boolean=req.body.status
        
        const result= await updateTasksById(id,status)
        if(result)
        {
            res.status(200).json({ task: result, message: `Task updated successfully` });
        }
        else{
            res.status(400).json({ task: result, message: `Task not found` });
        }
    } catch (error:any) {
        res.status(400).json({ error:error.message });
    }
}

export async function DeleteTasksByIdController (req:Request,res:Response):Promise<void> {
    try {
        const id:number=parseInt(req.params.id,10);
        
        const result= await deleteTasksById(id)
        if(result)
        {
            res.status(200).json({ task: result, message: `Task deleted successfully` });
        }
    } catch (error:any) {
        res.status(404).json({ message:`Task does not exists` });
    }
}