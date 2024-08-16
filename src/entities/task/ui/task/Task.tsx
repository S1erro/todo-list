import React, {FC} from 'react';
import cls from "./Task.module.scss";
import {TaskType} from "entities/task";
import DeleteTask from "../deleteTask/DeleteTaskButton";
import EditTask from "../editTask/EditTask";

interface TaskProps {
    task: TaskType,
    setTask: (task: TaskType) => void,
    deleteTask: (id: string) => void,
}

const Task: FC<TaskProps> = ({task, setTask, deleteTask}) => {
    return (
        <div className={cls.taskContainer}>
            <input
                type="checkbox"
                checked={task.isClosed}
                className={cls.radio}
                onChange={() => setTask({...task, isClosed: !task.isClosed})}
            />

            <div className={cls["radio-container"]}>
                <p className={task.isClosed ? cls["task-closed"] : cls.task}>{task.task}</p>
            </div>

            <div className={cls["btn-container"]}>
                <EditTask
                    task={task}
                    setTask={setTask}
                />
                <DeleteTask
                    task={task}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default Task;
