import React from 'react';
import cls from "./AllTasks.module.scss";
import Button from "shared/ui/Button/Button";
import cn from "classnames";
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';

interface Task {
    id: string;
    task: string;
    isClosed: boolean;
}

interface Count {
    closedCount: number;
    openCount: number;
}

interface TasksProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    count: Count;
    setCount: React.Dispatch<React.SetStateAction<Count>>;
}

const ActiveTasks: React.FC<TasksProps> = ({tasks, setTasks, setCount, count, ...props}) => {

    const checkboxChange = (id: string, isClosed: boolean) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, isClosed: !task.isClosed} : task
        );
        setTasks(updatedTasks);
        isClosed
            ? setCount({
                openCount: count.openCount + 1,
                closedCount: count.closedCount - 1,
            })
            : setCount({
                openCount: count.openCount - 1,
                closedCount: count.closedCount + 1,
            });
    };

    const deleteTask = (idToRemove: string, isClosed: boolean) => {
        const updatedTasks = tasks.filter(task => task.id !== idToRemove);
        setTasks(updatedTasks);
        isClosed
            ? setCount({
                openCount: count.openCount,
                closedCount: count.closedCount - 1,
            })
            : setCount({
                openCount: count.openCount - 1,
                closedCount: count.closedCount,
            });
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
        <main className={cls.main}>
            {tasks.map((taskObj, index) => (
                <div className={cls.taskContainer} key={index}>
                    <input
                        type="checkbox"
                        checked={taskObj.isClosed}
                        className={cls["radio-btn"]}
                        onChange={() => checkboxChange(taskObj.id, taskObj.isClosed)}
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
                            onClick={() => deleteTask(taskObj.id, taskObj.isClosed)}
                        >
                            <DeleteIcon/>
                        </Button>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default ActiveTasks;