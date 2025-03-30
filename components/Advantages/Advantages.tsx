import { ReactNode } from 'react';
import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg'

export const Advantages = ({ advantages }: AdvantagesProps): ReactNode => {
        return (
            <>
                {advantages.map(a => (
                    <div className={styles.advantage} key={a._id}>
                        <CheckIcon/>
                        <div className={styles.title}>{a.title}</div>
                        <hr className={styles.vline}/>
                        <div className={styles.description}>{a.description}</div>
                    </div>
                ))}
            </>
        );
};
