import React from "react";
import {TaskType} from "../model";

export const changeTaskStatus = (id: string, tasks: TaskType[], setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>) => {
    const updatedTasks = tasks.map((task) =>
        task.id === id ? {...task, isClosed: !task.isClosed} : task
    );
    setTasks(updatedTasks);
};

