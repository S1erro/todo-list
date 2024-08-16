import React, {FC} from 'react';
import cls from "./DeleteTaskButton.module.scss";
import Button from "shared/ui/Button/Button";
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {TaskType} from "../../model";

interface DeleteProps {
    task: TaskType,
    deleteTask: (id: string) => void
}

const DeleteTaskButton: FC<DeleteProps> = ({task, deleteTask}) => {
    return (
        <Button
            customClassName={cls.deleteBtn}
            onClick={() => deleteTask(task.id)}
        >
            <DeleteIcon/>
        </Button>
    );
};

export default DeleteTaskButton;