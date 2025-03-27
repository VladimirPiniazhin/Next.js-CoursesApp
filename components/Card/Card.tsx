import { ReactNode } from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color = 'white', children, className, ...props }: CardProps): ReactNode => {
        return (
            <div className={cn(styles.card, className, {
                [styles.blue]: color === 'blue',
                [styles.red]: color === 'red',
                [styles.white]: color === 'white',
            })}
            {...props}>
                {children}
            </div>
    );
};
