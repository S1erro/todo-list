import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AllTasks from "../../pages/AllTasks";
import ActiveTasks from "../../pages/ActiveTasks";
import ClosedTasks from "../../pages/ClosedTasks";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/all-tasks" element={<AllTasks />} />
            <Route path="/active-tasks" element={<ActiveTasks />}/>
            <Route path="/closed-tasks" element={<ClosedTasks />}/>
        </Routes>
    );
};

export default AppRouter;