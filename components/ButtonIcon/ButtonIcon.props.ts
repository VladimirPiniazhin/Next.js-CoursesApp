import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: ReactNode;
    appearance: 'primary' | 'white';
}
