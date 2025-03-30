'use client';
import { ReactNode, useEffect } from 'react';
import styles from './Up.module.css';
import UpIcon from './arrow-up.svg';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';

export const Up = (): ReactNode => {
    const control = useAnimation();
    const scrollY = useScrollY();

    useEffect(() => {
        control.start({
            opacity: scrollY/document.body.scrollHeight
        });
    }, [scrollY, control]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <motion.button 
            className={styles.up} 
            onClick={scrollToTop}
            animate={control}
            initial={{opacity: 0}}
        >
            <UpIcon />
        </motion.button>
    );
};
