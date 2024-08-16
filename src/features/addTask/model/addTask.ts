import { TaskType } from "entities/task";
import { v4 as uuidv4 } from "uuid";
import React from "react";

export const addTask = (input: string, tasks: TaskType[], setTasks: React.Dispatch<TaskType[]>) => {
    if (input !== '') {
        const newTask: TaskType = {id: uuidv4(), task: input, isClosed: false};
        setTasks([newTask, ...tasks]);
        return true;
    } else {
       return false;
    }
}