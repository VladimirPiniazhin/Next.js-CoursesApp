'use client';

import { ReactNode } from 'react';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): ReactNode => {
    const IconComponent = icons[icon];
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white',
        })} {...props}>
            <IconComponent />
        </button>

    );
};

