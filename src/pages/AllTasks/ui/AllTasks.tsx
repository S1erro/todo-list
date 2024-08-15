import React, {FC} from 'react';
import cls from "./AllTasks.module.scss";
import { Task } from "entities/task";
import Navbar from "widgets/Navbar";
import OptionsSelector from "widgets/OptionsSelector";
import ViewTasks from "features/viewTasks";

interface TasksProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const ActiveTasks: FC<TasksProps>  = ({ tasks, setTasks }) => {
    return (
        <div className={cls.main}>
            <Navbar tasks={tasks} setTasks={setTasks}/>
            <OptionsSelector tasks={tasks}/>
            <ViewTasks tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};

export default ActiveTasks;