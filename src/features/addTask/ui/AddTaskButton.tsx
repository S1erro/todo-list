import React, {ButtonHTMLAttributes, FC, useState} from 'react';
import Button from "shared/ui/Button/Button";
import {addTask} from "../model"
import {Task} from "entities/task";
import cls from "./AddTaskButton.module.scss"
import Modal from "react-modal";

interface addProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    input: string,
    tasks: Task[],
    setTasks: React.Dispatch<Task[]>,
    resetInput: () => void
}

const AddTaskButton: FC<addProps> = ({input, tasks, setTasks, resetInput}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <Button
                type="button"
                onClick={() => {
                    if(!addTask(input, tasks, setTasks)) {
                        setModalIsOpen(true);
                    }
                    resetInput();
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

export default AddTaskButton;