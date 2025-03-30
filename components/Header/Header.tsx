'use client';

import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../logo2.svg';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header({ className, menu, ...props }: HeaderProps): React.ReactNode{
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    const buttonVariants = {
        opened: {
            opacity: 1,
            transition: {
                delay: 0.3
            }
        },
        closed: {
            opacity: 0
        }
    }

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon icon='menuIcon' appearance='white' className={styles.menuIcon} onClick={() => setIsMenuOpen(true)} />
            <motion.div className={styles.mobileMenu}
                variants={variants}
                initial='closed'
                animate={isMenuOpen ? 'opened' : 'closed'}
            >
                <Sidebar menu={menu} />
                <motion.div variants={buttonVariants}>
                    <ButtonIcon 
                        className={styles.menuClose} 
                        icon='closeIcon' 
                        appearance='white' 
                        onClick={() => setIsMenuOpen(false)} 
                    />
                </motion.div>
            </motion.div>
        </header>
    )
}