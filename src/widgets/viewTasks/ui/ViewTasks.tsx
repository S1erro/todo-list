import React, {FC, useState} from 'react';
import {TaskType} from "entities/task";
import Task from "entities/task/ui/task/Task";
import TasksFilter from "features/tasksFilter";


interface ViewProps {
    tasks: TaskType[],
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

enum Filter {
    All,
    Active,
    Closed
}

export const ViewTasks: FC<ViewProps> = ({tasks, setTasks}) => {

    const [filter, setFilter] = useState<Filter>(Filter.All)

    const filteredTasks = tasks.filter(task => {
        if (filter === Filter.Active) {
            return !task.isClosed;
        } else if (filter === Filter.Closed) {
            return task.isClosed;
        } else {
            return true;
        }
    });

    const updateTask = function (updatedTask: TaskType) {
        setTasks(tasks =>
            tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
    }

    const deleteTask = (id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <TasksFilter tasks={tasks} filter={filter} setFilter={setFilter}/>
            {filteredTasks.map((taskObj) => (
                <Task
                    key={taskObj.id}
                    task={taskObj}
                    setTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};