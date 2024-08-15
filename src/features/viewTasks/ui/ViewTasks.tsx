import React, {FC} from 'react';
import {Task} from "entities/task";
import OneTask from "../../../entities/task/ui/task/OneTask";


interface ViewProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}


const ViewTasks: FC<ViewProps> = ({tasks, setTasks}) => {

    const checkboxChange = (id: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, isClosed: !task.isClosed} : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (idToRemove: string) => {
        const updatedTasks = tasks.filter(task => task.id !== idToRemove);
        setTasks(updatedTasks);
    }

    const editTask = (id: string) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                const editedTask = prompt("Edit your task", task.task);
                return { ...task, task: editedTask || task.task};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div>
            {tasks.map((taskObj) => (
               <OneTask
                   key={taskObj.id}
                   task={taskObj}
                   checkboxChange={checkboxChange}
                   deleteTask={deleteTask}
                   editTask={editTask}
               />
            ))}
        </div>
    );
};

export default ViewTasks;