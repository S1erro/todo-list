import React, {FC, useState} from 'react';
import Button from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "entities/task";

interface TasksProps {
    tasks: Task[],
    setTasks: React.Dispatch<Task[]>
}

const Navbar: FC<TasksProps> = ({ tasks, setTasks, ...props }) => {

    const [input, setInput] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const addTask = () => {
        if (input !== '') {
            const newTask: Task = {id: uuidv4(), task: input, isClosed: false};
            setTasks([newTask, ...tasks]);
            setInput('');
        } else {
            alert('Enter the task name')
        }
    }

    return (
        <header className={cls.header}>
            <div className={cls.navbar}>
                <input
                    type="text"
                    placeholder="Task To Be Done..."
                    className={cls.input}
                    onChange={inputChange}
                    value={input}
                />
                <Button
                    type="button"
                    customClassName={cls.btn}
                    onClick={addTask}
                >
                    Add
                </Button>
            </div>
        </header>
    );
};

export default Navbar;