import React, {FC} from 'react';
import cls from './OptionsSelector.module.scss'
import {Task} from "entities/task";

enum Filter {
    All,
    Active,
    Closed
}

interface OptionsProps {
    tasks: Task[],
    filter: Filter,
    setFilter: React.Dispatch<React.SetStateAction<Filter>>
}

const OptionsSelector: FC<OptionsProps> = ({tasks, filter, setFilter}) => {

    const closedTasksCount = tasks.filter(task => task.isClosed).length;

    const openTasksCount = tasks.filter(task => !task.isClosed).length;

    const allTasksCount = closedTasksCount + openTasksCount;

    return (
        <div className={cls.selector}>

            <button
                className={`${cls.selectorBtn} ${filter === Filter.All ? cls.active : ''}`}
                onClick={() => setFilter(Filter.All)}
            >
                Все ({allTasksCount})
            </button>

            <button
                className={`${cls.selectorBtn} ${filter === Filter.Active ? cls.active : ''}`}
                onClick={() => setFilter(Filter.Active)}
            >
                В работе ({openTasksCount})
            </button>

            <button
                className={`${cls.selectorBtn} ${filter === Filter.Closed ? cls.active : ''}`}
                onClick={() => setFilter(Filter.Closed)}
            >
                Сделано ({closedTasksCount})
            </button>

        </div>
    );
};

export default OptionsSelector;