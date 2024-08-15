import React, {FC, useState} from 'react';
import AddTaskButton from 'features/addTask';
import cls from './Navbar.module.scss';
import {Task} from "entities/task";

interface TasksProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Navbar: FC<TasksProps> = ({tasks, setTasks}) => {

    const [input, setInput] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <header className={cls.header}>
            <div className={cls.navbar}>
                <input
                    type="text"
                    placeholder="OneTask To Be Done..."
                    className={cls.input}
                    onChange={inputChange}
                    value={input}
                />
                <AddTaskButton
                    input={input}
                    tasks={tasks}
                    setTasks={setTasks}
                    resetInput={() => setInput('')}
                />
            </div>
        </header>
    );
};

export default Navbar;