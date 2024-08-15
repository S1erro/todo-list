import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import AllTasks from "pages/AllTasks";
import { Task } from "entities/task";

interface RouterProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const AppRouter: FC<RouterProps> = ({ tasks, setTasks }) => {
    return (
        <Routes>
            <Route
                path="*"
                element={
                    <AllTasks tasks={tasks} setTasks={setTasks}/>
                }
            />
        </Routes>
    );
};

export default AppRouter;