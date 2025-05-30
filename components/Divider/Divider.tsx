import { ReactNode } from 'react';
import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';
import cn from 'classnames';

export const Divider = ({className, ...props }: DividerProps): ReactNode => {
    return (
        <hr className={cn(styles.hr, className)} {...props} />
    );
};
