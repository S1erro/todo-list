import React, {FC} from 'react';
import AddTask from 'features/addTask';
import cls from './AddForm.module.scss';
import {TaskType} from "entities/task";

interface TasksProps {
    tasks: TaskType[],
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export const AddForm: FC<TasksProps> = ({tasks, setTasks}) => {
    return (
        <header className={cls.header}>
            <AddTask
                tasks={tasks}
                setTasks={setTasks}
            />
        </header>
    );
};
