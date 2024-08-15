import React from "react";
import {Task} from "../model";


export const deleteTask = (idToRemove: string, tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    const updatedTasks = tasks.filter(task => task.id !== idToRemove);
    setTasks(updatedTasks);
}

export const editTask = (currentTask: Task | undefined, id: string, tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
            return {...task, task: currentTask?.task || task.task};
        }
        return task;
    });
    setTasks(updatedTasks);
}

export const checkboxChange = (id: string, tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    const updatedTasks = tasks.map((task) =>
        task.id === id ? {...task, isClosed: !task.isClosed} : task
    );
    setTasks(updatedTasks);
};

