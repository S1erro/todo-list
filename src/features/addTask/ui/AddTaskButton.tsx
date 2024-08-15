import React, {ButtonHTMLAttributes, FC} from 'react';
import Button from "shared/ui/Button/Button";
import {addTask} from "../model"
import {Task} from "entities/task";
import cls from "./AddTaskButton.module.scss"

interface addProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    input: string,
    tasks: Task[],
    setTasks: React.Dispatch<Task[]>,
    resetInput: () => void
}

const AddTaskButton: FC<addProps> = (
    {
        input,
        tasks,
        setTasks,
        resetInput
    }) => {

    return (
        <Button
            type="button"
            onClick={() => {
                addTask(input, tasks, setTasks);
                resetInput();
            }}
            customClassName={cls.btn}
        >
            Add
        </Button>
    );
};

export default AddTaskButton;