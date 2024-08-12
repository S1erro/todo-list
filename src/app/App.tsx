import React, {useState} from 'react';
import './styles/index.scss';
import Navbar from "widgets/Navbar";
import OptionsSelector from "widgets/OptionsSelector";
import AppRouter from "./router/AppRouter";
import { v4 as uuidv4 } from 'uuid';

function App() {

    interface Task {
        id: string;
        task: string;
        isClosed: boolean;
    }

    const [tasks, setTasks] = useState<Task[]>([
        // {
        //     id: uuidv4(),
        //     task: "nonotest",
        //     isClosed: true
        // },
        // {
        //     id: uuidv4(),
        //     task: "notest",
        //     isClosed: false
        // },
        // {
        //     id: uuidv4(),
        //     task: "test",
        //     isClosed: true
        // }
    ])

    const [count, setCount] = useState({
        closedCount: 0,
        openCount: 0,
    })

    const [option, setOption] = useState()

    return (
        <div className="App">
            <Navbar tasks={tasks} setTasks={setTasks} setCount={setCount} count={count}/>
            <OptionsSelector countTasks={count}/>
            <AppRouter tasks={tasks} setTasks={setTasks} count={count} setCount={setCount}/>
        </div>
    );
}

export default App;
