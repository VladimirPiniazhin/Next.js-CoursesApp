import { Htag, P, Button } from '../components';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <Htag tag='h1'>404</Htag>
      <P size='large'>Страница не найдена</P>
      <P size='large'>К сожалению, запрашиваемая страница не существует</P>
      <Link href='/'>
        <Button appearance='primary' arrow='right'>
          Вернуться на главную
        </Button>
      </Link>
    </main>
  );
} 