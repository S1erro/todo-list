import React, {FC} from 'react';
import cls from "./DeleteTaskButton.module.scss";
import Button from "shared/ui/Button/Button";
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';

interface DeleteProps {
    id: string,
    deleteTask: (id: string) => void
}

const DeleteTaskButton: FC<DeleteProps> = ({id, deleteTask}) => {
    return (
        <Button
            customClassName={cls.deleteBtn}
            onClick={() => deleteTask(id)}
        >
            <DeleteIcon/>
        </Button>
    );
};

export default DeleteTaskButton;