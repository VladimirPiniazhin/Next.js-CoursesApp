import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): React.ReactNode => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                TopApp © {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target='_blank'>Пользовательское соглашение</a>
            <a href="#" target='_blank'>Политика конфиденциальности</a>
        </footer>
    )
}