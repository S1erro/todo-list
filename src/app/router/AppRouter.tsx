import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AllTasks from "../../pages/AllTasks";
import ActiveTasks from "../../pages/ActiveTasks";
import ClosedTasks from "../../pages/ClosedTasks";

interface Task {
    id: string;
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

const AppRouter: React.FC<TasksProps> = ({tasks, setTasks, setCount, count, ...props}) => {
    return (
        <Routes>
            <Route
                path="*"
                element={
                    <AllTasks tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}/>
                }
            />
            <Route
                path="/all-tasks"
                element={
                    <AllTasks tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}/>
                }
            />
            <Route
                path="/active-tasks"
                element={
                    <ActiveTasks tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}/>
                }
            />
            <Route
                path="/closed-tasks"
                element={
                    <ClosedTasks tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}/>
                }
            />
        </Routes>
    );
};

export default AppRouter;