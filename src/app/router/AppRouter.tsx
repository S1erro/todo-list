import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AllTasksPage from "pages/AllTasksPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="*"
                element={
                    <AllTasksPage/>
                }
            />
        </Routes>
    );
};

export default AppRouter;