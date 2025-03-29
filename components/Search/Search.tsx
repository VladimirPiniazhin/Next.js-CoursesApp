'use client';
import { ReactNode, useState } from 'react';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './glass.svg';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): ReactNode => {

    const [search, setSearch] = useState<string>('');

    const router = useRouter();
    
    const goToSearch = () => {
        router.push(`/search?q=${search}`);
    };
    
    
    return (
        <form className={cn(styles.search, className)} {...props}>
            <Input 
            className={styles.input}
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    goToSearch();
                }
            }} />
            <Button 
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </form>
    );
};
