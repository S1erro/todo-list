import React, {ButtonHTMLAttributes, FC, useState} from 'react';
import Button from "shared/ui/Button/Button";
import {addTask} from "../model"
import {TaskType} from "entities/task";
import cls from "./AddTask.module.scss"
import Modal from "react-modal";

interface addProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    tasks: TaskType[],
    setTasks: React.Dispatch<TaskType[]>,
}

const AddTask: FC<addProps> = ({tasks, setTasks}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [input, setInput] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Task To Be Done..."
                className={cls.input}
                onChange={inputChange}
                value={input}
            />

            <Button
                type="button"
                onClick={() => {
                    if (!addTask(input, tasks, setTasks)) {
                        setModalIsOpen(true);
                    }
                    setInput('');
                }}
                customClassName={cls.btn}
            >
                Add
            </Button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Error"
                className={cls.modal}
            >
                <h2>Enter the task name</h2>

                <Button
                    customClassName={cls.btnModal}
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </Button>

            </Modal>
        </>
    );
};

export default AddTask;