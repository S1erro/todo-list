import React, {useState} from 'react';
import cls from "./AllTasksPage.module.scss";
import { Task } from "entities/task";
import {ViewTasks} from "widgets";
import {v4 as uuidv4} from "uuid";
import AddTask from "../../../entities/task/ui/addTask/AddTask";


const ActiveTasks = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (input: string) => {
        if (input !== '') {
            const newTask: Task = {id: uuidv4(), task: input, isClosed: false};
            setTasks([newTask, ...tasks]);
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={cls.main}>
            <AddTask addTask={addTask}/>
            <ViewTasks tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};

export default ActiveTasks;