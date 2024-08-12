import React from 'react';
import Button from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';


const Navbar = () => {
    return (
        <header className={cls.header}>
            <div className={cls.navbar}>
                <input type="text" placeholder="Task To Be Done..." className={cls.input}/>
                <Button type="button" customClassName={cls.btn}>
                    Add
                </Button>
            </div>
        </header>
    );
};

export default Navbar;