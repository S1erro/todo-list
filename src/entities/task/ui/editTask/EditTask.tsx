import React, {FC, useState} from 'react';
import cls from "./EditTask.module.scss";
import Button from "shared/ui/Button/Button";
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';
import {editTask} from "../../api";
import {Task} from "../../model";
import Modal from "react-modal";

interface EditProps {
    id: string,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const EditTask: FC<EditProps> = ({id, tasks, setTasks}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [currentTask, setCurrentTask] = useState<Task | undefined>(
        tasks.find((task) => task.id === id)
    );

    return (
        <>
            <Button
                customClassName={cls.btn}
                onClick={() => {
                    setModalIsOpen(true);
                    setCurrentTask(tasks.find((task) => task.id === id))
                }}
            >
                <NoteIcon/>
            </Button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Edit Task Modal"
                className={cls.modal}
            >
                <h2>Edit Task</h2>
                <input
                    type="text"
                    value={currentTask?.task || ''}
                    className={cls.input}
                    onChange={(event) =>
                        setCurrentTask({...currentTask!, task: event.target.value})
                    }
                />
                <div>
                    <Button
                        customClassName={cls.btnModal}
                        onClick={() => {
                            setTasks([...tasks, ])
                            editTask(currentTask, id, tasks, setTasks);
                            setModalIsOpen(false);
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        customClassName={cls.btnModal}
                        onClick={() => setModalIsOpen(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default EditTask;
