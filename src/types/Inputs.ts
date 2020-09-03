import React from 'react';
import Icons from '../common/icon';

export type inputTextType = 'text' | 'email' | 'password';
export type listItemType = {
    title: string;
    value: string;
};

export interface IInputProps {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
    disabled?: boolean;
    error?: boolean;
    errorText?: string;
}

export interface IInputTextProps {
    value: string | number;
    type?: inputTextType;
    placeholder?: string;
}

export interface IInputIconProps {
    icon?: keyof typeof Icons;
}

export interface IInputRadioProps {
    value: string;
    options: Array<listItemType>;
}

export interface ICheckboxProps {
    value: boolean;
}

export interface ISelectProps {
    value: string;
    placeholder?: string;
}

export interface IOptionsProps {
    options: Array<listItemType>;
}