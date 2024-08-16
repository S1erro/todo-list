import React, {useState} from 'react';
import cls from "./AllTasksPage.module.scss";
import { TaskType } from "entities/task";
import {AddForm} from "widgets";
import {ViewTasks} from "widgets";


const ActiveTasks = () => {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    return (
        <div className={cls.main}>
            <AddForm tasks={tasks} setTasks={setTasks}/>
            <ViewTasks tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};

export default ActiveTasks;