import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient();

export async function createTask(task_name:string):Promise<Task> {

    return prisma.task.create({data:{task_name}})
}

export async function findTasks():Promise<Task[]> {

    return prisma.task.findMany({})
}

export async function findTaskById(id:number):Promise<Task|null> {

    return prisma.task.findUnique({where:{id}})
}

export async function updateTasksById(id:number,status:boolean):Promise<Task|null> {

    return prisma.task.update({where:{id}, data:{completed:status}})
}

export async function deleteTasksById(id:number):Promise<Task|null> {

    return prisma.task.delete({where:{id}})
}