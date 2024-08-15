import React, {FC} from 'react';
import {Task} from "../../model";
import {checkboxChange} from "../../api";
import cls from "./Checkbox.module.scss"

interface CheckboxProps {
    id: string,
    isClosed: boolean,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Checkbox: FC<CheckboxProps> = ({id, isClosed, tasks, setTasks}) => {
    return (
        <input
            type="checkbox"
            checked={isClosed}
            className={cls.radio}
            onChange={() => checkboxChange(id, tasks, setTasks)}
        />
    );
};

export default Checkbox;