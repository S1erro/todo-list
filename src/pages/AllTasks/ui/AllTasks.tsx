import React, {FC} from 'react';
import cls from "./AllTasks.module.scss";
import Button from "shared/ui/Button/Button";
import cn from "classnames";
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';
import { Task } from "entities/task";
import Navbar from "widgets/Navbar";
import OptionsSelector from "widgets/OptionsSelector";

interface TasksProps {
    tasks: Task[],
    setTasks: React.Dispatch<Task[]>
}

const ActiveTasks: FC<TasksProps>  = ({ tasks, setTasks }) => {

    const checkboxChange = (id: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, isClosed: !task.isClosed} : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (idToRemove: string) => {
        const updatedTasks = tasks.filter(task => task.id !== idToRemove);
        setTasks(updatedTasks);
    }

    const editTask = (id: string) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                const editedTask = prompt("Edit your task", task.task);
                return { ...task, task: editedTask || task.task};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className={cls.main}>
            <Navbar tasks={tasks} setTasks={setTasks}/>
            <OptionsSelector tasks={tasks}/>
            {tasks.map((taskObj, index) => (
                <div className={cls.taskContainer} key={index}>
                    <input
                        type="checkbox"
                        checked={taskObj.isClosed}
                        className={cls["radio-btn"]}
                        onChange={() => checkboxChange(taskObj.id)}
                    />

                    <div className={cls["radio-container"]}>
                        <p className={taskObj.isClosed ? cls["task-closed"] : cls.task}>{taskObj.task}</p>
                    </div>

                    <div className={cls["btn-container"]}>
                        <Button
                            customClassName={cls.btn}
                            onClick={() => editTask(taskObj.id)}
                        >
                            <NoteIcon/>
                        </Button>
                        <Button
                            customClassName={cn(cls.deleteBtn, cls.btn)}
                            onClick={() => deleteTask(taskObj.id)}
                        >
                            <DeleteIcon/>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActiveTasks;