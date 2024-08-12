import React, {useState} from 'react';
import Button from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface Task {
    task: string;
    isClosed: boolean;
}

interface Count {
    closedCount: number;
    openCount: number;
}

interface TasksProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    count: Count;
    setCount: React.Dispatch<React.SetStateAction<Count>>;
}

const Navbar: React.FC<TasksProps> = ({tasks, setTasks, setCount, count, ...props}) => {

    const [input, setInput] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const addTask = () => {
        if (input !== '') {
            const newTask: Task = {task: input, isClosed: false};
            setTasks([newTask, ...tasks]);
            setCount({
                openCount: count.openCount + 1,
                closedCount: count.closedCount
            })
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