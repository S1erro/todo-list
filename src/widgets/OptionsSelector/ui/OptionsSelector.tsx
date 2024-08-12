import React from 'react';
import cls from './OptionsSelector.module.scss'
import { Link } from 'react-router-dom';

const OptionsSelector = () => {
    return (
        <div className={cls.selector}>
            <Link to="/all-tasks">
                <button className={cls.selectorBtn}>
                    Все ()
                </button>
            </Link>
            <Link to="/active-tasks">
                <button className={cls.selectorBtn}>
                    В работе ()
                </button>
            </Link>
            <Link to="/closed-tasks">
                <button className={cls.selectorBtn}>
                    Сделано ()
                </button>
            </Link>
        </div>
    );
};

export default OptionsSelector;