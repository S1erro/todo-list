import React from 'react';
import cls from "./ClosedTasks.module.scss";
import Button from "shared/ui/Button/Button";
import cn from "classnames";
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';

interface Task {
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

    const checkboxChange = (index: number, isClosed: boolean) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? {...task, isClosed: !task.isClosed} : task
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

    const deleteTask = (indexToRemove: number, isClosed: boolean) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
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

    const editTask = (index: number) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                const editedTask = prompt("Edit your task", task.task);
                return {...task, task: editedTask || task.task};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <main className={cls.main}>
            {tasks
                .filter(taskObj => taskObj.isClosed)
                .map((taskObj, index) => (
                    <div className={cls.taskContainer} key={index}>
                        <div className={cls["radio-container"]}>
                            <input
                                type="checkbox"
                                checked={taskObj.isClosed}
                                className={cls["radio-btn"]}
                                onChange={() => checkboxChange(index, taskObj.isClosed)}
                            />
                            <p className={cls.task}>{taskObj.task}</p>
                        </div>

                        <div className={cls["btn-container"]}>
                            <Button
                                customClassName={cls.btn}
                                onClick={() => editTask(index)}
                            >
                                <NoteIcon/>
                            </Button>
                            <Button
                                customClassName={cn(cls.deleteBtn, cls.btn)}
                                onClick={() => deleteTask(index, taskObj.isClosed)}
                            >
                                <DeleteIcon/>
                            </Button>
                        </div>
                    </div>
                ))
            }
        </main>
    );
};

export default ActiveTasks;