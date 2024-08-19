import React, {FC, useState} from 'react';
import {Task} from "entities/task";
import {TaskCard} from "entities/task";
import TasksFilter from "features";


interface ViewProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
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

    const updateTask = function (updatedTask: Task) {
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
                <TaskCard
                    key={taskObj.id}
                    task={taskObj}
                    setTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};