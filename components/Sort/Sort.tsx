'use client';
import { ReactNode} from 'react';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';
import styles from './Sort.module.css';
import cn from 'classnames';


export const Sort = ({ sort, setSort, className, ...props }: SortProps): ReactNode => {

    return (
        <div className={cn(styles.sort, className)} {...props}>
            <button 
            onClick={() => setSort(SortEnum.Rating)}
            className={cn({
                [styles.active]: sort === SortEnum.Rating,
                [styles.none]: sort === SortEnum.None
            })}>
                <SortIcon className={styles.sortIcon} /> По рейтингу
            </button>
            <button 
            onClick={() => setSort(SortEnum.Price)}
            className={cn({
                [styles.active]: sort === SortEnum.Price,
                [styles.none]: sort === SortEnum.None
            })}>
                <SortIcon className={styles.sortIcon} /> По цене
            </button>
        </div>
    );
};
export { SortEnum };

