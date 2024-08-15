import { Task } from "entities/task";
import { v4 as uuidv4 } from "uuid";
import React from "react";

export const addTask = (input: string, tasks: Task[], setTasks: React.Dispatch<Task[]>) => {
    if (input !== '') {
        const newTask: Task = {id: uuidv4(), task: input, isClosed: false};
        setTasks([newTask, ...tasks]);
        return true;
    } else {
       return false;
    }
}