import React, {FC} from 'react';
import cls from "./EditTask.module.scss";
import Button from "shared/ui/Button/Button";
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';
import {editTask} from "../../api";
import {Task} from "../../model";

interface DeleteProps {
    id: string,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const EditTask: FC<DeleteProps> = ({id, tasks, setTasks}) => {
    return (
        <Button
            customClassName={cls.btn}
            onClick={() => editTask(id, tasks, setTasks)}
        >
            <NoteIcon/>
        </Button>
    );
};

export default EditTask;