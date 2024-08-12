import React from 'react';
import Button from 'shared/ui/Button/Button';
import cls from './AllTasks.module.scss';
import cn from 'classnames';
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';

const AllTasks = () => {

    const taskArr = [
        {
            task: "Доделать ToDo",
            isClosed: true
        },
        {
            task: "Доделать ToDo",
            isClosed: false
        },
        {
            task: "Доделать ToDo",
            isClosed: true
        }
    ];

    return (
        <main className={cls.main}>
            {taskArr.map((taskObj, index) => (
                <div className={cls.taskContainer}>
                    <div className={cls["radio-container"]}>
                        <input type="checkbox" className={cls["radio-btn"]}/>
                        <p className={cls.task}>{taskObj.task}</p>
                    </div>

                    <div className={cls["btn-container"]}>
                        <Button customClassName={cls.btn}>
                            <NoteIcon/>
                        </Button>
                        <Button customClassName={cn(cls.deleteBtn, cls.btn)}>
                            <DeleteIcon/>
                        </Button>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default AllTasks;