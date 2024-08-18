import React, {FC} from 'react';
import cls from "./TaskCard.module.scss";
import {Task} from "entities/task";
import DeleteTask from "../deleteTask/DeleteTaskButton";
import EditTask from "../editTask/EditTask";

interface TaskProps {
    task: Task,
    setTask: (task: Task) => void,
    deleteTask: (id: string) => void,
}

export const TaskCard: FC<TaskProps> = ({task, setTask, deleteTask}) => {
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
                    id={task.id}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};
