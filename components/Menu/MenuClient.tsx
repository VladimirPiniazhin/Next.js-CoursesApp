'use client'
import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem, MenuItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';



export const MenuClient = ({menu}: {menu: MenuItem[]}) => {    
    const pathname = usePathname();
    const [menuState, setMenuState] = useState(menu);

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.01,
                duration: 0.1
            }
        },
        hidden: {
            marginBottom: 0,
            transition: {
                duration: 0.1
            }
        }
    }

    const variantsChildren = {
        visible: {
            opacity: 1, 
            height: 'auto',
            transition: {
                height: { duration: 0.1, ease: "easeInOut" },
                opacity: { duration: 0.1 }
            }
        },
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                height: { duration: 0.1, ease: "easeInOut" },
                opacity: { duration: 0.1 }
            }
        }
    }

            

    const openSecondLevel = (secondCategory: string) => {
        setMenuState(prevMenu => {
            return prevMenu.map(item => {
                if (item._id.secondCategory === secondCategory) {
                    return {...item, isOpened: !item.isOpened};
                }
                return item;
            });
        });
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menuItem => (
                    <div key={menuItem.route}>
                        <Link href={`/${menuItem.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menuItem.id == 0
                            })}>
                                {menuItem.icon}
                                <span>{menuItem.name}</span>
                            </div>
                        </Link>
                        {menuItem.id == 0 && buildSecondLevel(menuItem)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menuState.map(item => {
                    const pathParts = pathname?.split('/') || [];
                    const isActive = pathParts.length > 2 && pathParts[2] === item._id.secondCategory;
                    
                    return (
                        <div key={item._id.secondCategory}>
                            <div 
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(item._id.secondCategory)}
                            >
                                {item._id.secondCategory}
                            </div>
                            <motion.div 
                                className={cn(styles.secondLevelBlock)}
                                layout={true}
                                variants={variants}
                                initial={item.isOpened ? 'visible' : 'hidden'}
                                animate={item.isOpened ? 'visible' : 'hidden'}
                            >
                                {buildThirdLevel(item.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => {
                const path = `/${route}/${page.alias}`;
                const isActive = pathname === path;
                
                return (
                    <motion.div key={page._id} variants={variantsChildren}>
                        <Link href={path} className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]: isActive
                            })}>
                            {page.category}
                        </Link>
                    </motion.div>
                )
            })  
        )
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}