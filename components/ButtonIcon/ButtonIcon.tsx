'use client';

import { ReactNode } from 'react';
import { ButtonIconProps } from './ButtonIcon.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): ReactNode => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white',
        })} {...props}>
            {icon}
        </button>

    );
};

