import React, {FC} from 'react';
import cls from './OptionsSelector.module.scss'
import { Link } from 'react-router-dom';
import { Task } from "entities/task";

interface OptionsProps {
    tasks: Task[]
}

const OptionsSelector: FC<OptionsProps> = ({tasks}) => {

    const closedTasksCount = tasks.filter(task => task.isClosed).length;

    const openTasksCount = tasks.filter(task => !task.isClosed).length;

    const allTasksCount = closedTasksCount + openTasksCount;

    return (
        <div className={cls.selector}>
            <Link to="/all-tasks">
                <button className={cls.selectorBtn}>
                    Все ({allTasksCount})
                </button>
            </Link>
            <Link to="/active-tasks">
                <button className={cls.selectorBtn}>
                    В работе ({openTasksCount})
                </button>
            </Link>
            <Link to="/closed-tasks">
                <button className={cls.selectorBtn}>
                    Сделано ({closedTasksCount})
                </button>
            </Link>
        </div>
    );
};

export default OptionsSelector;