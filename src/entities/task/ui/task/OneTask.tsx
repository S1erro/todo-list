import React, {FC} from 'react';
import cls from "../../../../features/viewTasks/ui/AddTaskButton.module.scss";
import Button from "shared/ui/Button/Button";
import cn from "classnames";
import {Task} from "entities/task"
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';

interface TaskProps {
    task: Task,
    checkboxChange: (id: string) => void,
    deleteTask: (idToRemove: string) => void,
    editTask: (id: string) => void,
}

const OneTask: FC<TaskProps> = ({task,checkboxChange, deleteTask, editTask}) => {

    return (
        <div className={cls.taskContainer}>
            <input
                type="checkbox"
                checked={task.isClosed}
                className={cls["radio-btn"]}
                onChange={() => checkboxChange(task.id)}
            />

            <div className={cls["radio-container"]}>
                <p className={task.isClosed ? cls["task-closed"] : cls.task}>{task.task}</p>
            </div>

            <div className={cls["btn-container"]}>
                <Button
                    customClassName={cls.btn}
                    onClick={() => editTask(task.id)}
                >
                    <NoteIcon/>
                </Button>
                <Button
                    customClassName={cn(cls.deleteBtn, cls.btn)}
                    onClick={() => deleteTask(task.id)}
                >
                    <DeleteIcon/>
                </Button>
            </div>
        </div>
    );
};

export default OneTask;
