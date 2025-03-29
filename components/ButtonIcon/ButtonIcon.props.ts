import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import closeIcon from './close.svg';
import menuIcon from './menu.svg';

export const icons = {
    closeIcon,
    menuIcon
}

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}
