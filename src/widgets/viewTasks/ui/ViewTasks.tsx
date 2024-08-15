import React, {FC, useState} from 'react';
import {Task} from "entities/task";
import OneTask from "entities/task/ui/task/OneTask";
import OptionsSelector from "features/optionsSelector";


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
        if (filter === Filter.All) {
            return true;
        } else if (filter === Filter.Active) {
            return !task.isClosed;
        } else if (filter === Filter.Closed) {
            return task.isClosed;
        }
        return true;
    });

    return (
        <div>
            <OptionsSelector tasks={tasks} filter={filter} setFilter={setFilter}/>
            {filteredTasks.map((taskObj) => (
               <OneTask
                   key={taskObj.id}
                   tasks={tasks}
                   task={taskObj}
                   setTasks={setTasks}
               />
            ))}
        </div>
    );
};