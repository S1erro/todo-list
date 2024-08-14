import React, {useState} from 'react';
import './styles/index.scss';
import AppRouter from "./router/AppRouter";
import { Task } from "entities/task"

function App() {

    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <div className="App">
            <AppRouter tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App;
