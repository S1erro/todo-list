import React, {ButtonHTMLAttributes, FC} from 'react';
import cls from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    customClassName?: string;
}

const Button: FC<ButtonProps> = ({ customClassName, ...props}) => {
    return (
        <button {...props} className={cn(cls.Button, customClassName)}>

        </button>
    );
};

export default Button;