import React, {FC, useState} from 'react';
import cls from "./EditTask.module.scss";
import Button from "shared/ui/Button/Button";
import {ReactComponent as NoteIcon} from 'shared/icons/note.svg';
import {Task} from "../../model";
import Modal from "react-modal";

interface EditProps {
    task: Task,
    setTask: (task: Task) => void
}

const EditTask: FC<EditProps> = ({task, setTask}) => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [editedTask, setEditedTask] = useState<string>(task.task);

    const cancelHandler = () => {
        setModalIsOpen(false)
        setEditedTask(task.task)
    }

    return (
        <>
            <Button
                customClassName={cls.btn}
                onClick={() => {
                    setModalIsOpen(true);
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
                    value={editedTask}
                    className={cls.input}
                    onChange={(event) =>
                        setEditedTask(event.target.value)
                    }
                />
                <div>
                    <Button
                        customClassName={cls.btnModal}
                        onClick={() => {
                            setModalIsOpen(false);
                            setTask({...task, task: editedTask})
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        customClassName={cls.btnModal}
                        onClick={cancelHandler}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default EditTask;
