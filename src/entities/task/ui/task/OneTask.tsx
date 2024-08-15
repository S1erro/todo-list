import React, {FC} from 'react';
import cls from "./task.module.scss";
import {Task} from "entities/task";
import DeleteTask from "../deleteTask/DeleteTask";
import EditTask from "../editTask/EditTask";
import Checkbox from "../checkbox/Checkbox";

interface TaskProps {
    task: Task,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const OneTask: FC<TaskProps> = ({task , tasks, setTasks}) => {

    return (
        <div className={cls.taskContainer}>
            <Checkbox
                id={task.id}
                isClosed={task.isClosed}
                tasks={tasks}
                setTasks={setTasks}
            />

            <div className={cls["radio-container"]}>
                <p className={task.isClosed ? cls["task-closed"] : cls.task}>{task.task}</p>
            </div>

            <div className={cls["btn-container"]}>
                <EditTask
                    id={task.id}
                    tasks={tasks}
                    setTasks={setTasks}
                />
                <DeleteTask
                    id={task.id}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            </div>
        </div>
    );
};

export default OneTask;
