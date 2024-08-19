import React, {ButtonHTMLAttributes, FC, useState} from 'react';
import Button from "shared/ui/Button/Button";
import cls from "./AddTask.module.scss"
import Modal from "react-modal";

interface addProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    addTask: (input: string) => boolean
}

const AddTask: FC<addProps> = ({addTask}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [input, setInput] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const addTaskHandler = (input: string) => {
        if (!addTask(input)) {
            setModalIsOpen(true);
        }
        setInput('');
    }

    return (
        <header className={cls.header}>
            <input
                type="text"
                placeholder="Task To Be Done..."
                className={cls.input}
                onChange={inputChange}
                value={input}
            />

            <Button
                type="button"
                onClick={() => addTaskHandler(input)}
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
        </header>
    );
};

export default AddTask;