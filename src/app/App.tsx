import React, {useState} from 'react';
import './styles/index.scss';
import Navbar from "widgets/Navbar";
import OptionsSelector from "widgets/OptionsSelector";
import AppRouter from "./router/AppRouter";

function App() {

    interface Task {
        task: string;
        isClosed: boolean;
    }

    const [tasks, setTasks] = useState<Task[]>([
        {
            task: "nonotest",
            isClosed: true
        },
        {
            task: "notest",
            isClosed: false
        },
        {
            task: "test",
            isClosed: true
        }
    ])

    const [count, setCount] = useState({
        closedCount: 2,
        openCount: 1,
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
