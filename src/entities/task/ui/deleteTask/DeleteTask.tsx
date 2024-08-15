import React, {FC} from 'react';
import cls from "./DeleteTask.module.scss";
import Button from "shared/ui/Button/Button";
import {ReactComponent as DeleteIcon} from 'shared/icons/trash.svg';
import {deleteTask} from "../../api";
import {Task} from "../../model";

interface DeleteProps {
    id: string,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const DeleteTask: FC<DeleteProps> = ({id, tasks, setTasks}) => {
    return (
        <Button
            customClassName={cls.deleteBtn}
            onClick={() => deleteTask(id, tasks, setTasks)}
        >
            <DeleteIcon/>
        </Button>
    );
};

export default DeleteTask;