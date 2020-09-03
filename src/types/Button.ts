import {MouseEvent} from 'react'

export type themeTypes = 'default';
export type buttonTypes = 'button' | 'submit';

export interface IButtonProps {
    disabled?: boolean;
    type?: themeTypes;
    buttonType?: buttonTypes;
    onClick?: (event: MouseEvent) => void;
}

export interface IButtonLoadingProps {
    loading?: boolean;
}