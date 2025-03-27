import { Metadata } from "next";
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Title',
    description: 'Description'
}

export default function About(){
    return (
        <div className={styles.main}>
            Страница о нас
        </div>
    )
}