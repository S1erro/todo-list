import React from 'react';
import cls from './OptionsSelector.module.scss'
import { Link } from 'react-router-dom';

interface CountTasks  {
    closedCount: number;
    openCount: number;
}

interface OptionsProps {
    countTasks: CountTasks;
}

const OptionsSelector: React.FC<OptionsProps> = ({countTasks}) => {
    return (
        <div className={cls.selector}>
            <Link to="/all-tasks">
                <button className={cls.selectorBtn}>
                    Все ({countTasks.closedCount + countTasks.openCount})
                </button>
            </Link>
            <Link to="/active-tasks">
                <button className={cls.selectorBtn}>
                    В работе ({countTasks.openCount})
                </button>
            </Link>
            <Link to="/closed-tasks">
                <button className={cls.selectorBtn}>
                    Сделано ({countTasks.closedCount})
                </button>
            </Link>
        </div>
    );
};

export default OptionsSelector;