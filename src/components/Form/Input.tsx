import React, {FC} from 'react';
import {IInputProps, IInputTextProps, IInputIconProps} from '../../types/Inputs';
import InputError from './Error';
import Icon from '../Icon';
import cx from 'classnames';
import styles from './styles.module.scss';
import stylesInput from './Input.module.scss';

interface IProps extends IInputProps, IInputTextProps, IInputIconProps {}

const Input: FC<IProps> = ({
    name,
    onChange,
    value = '',
    type = 'text',
    placeholder,
    disabled,
    icon,
    error,
    errorText
}) => {
    const classesInput = cx(
        styles.Field,
        {[styles.FieldWithError]: !!error && !!errorText}
    );

    const classesField = cx(
        stylesInput.Input,
        {[stylesInput.InputWithIcon]: !!icon}
    )

    return (
        <div className={classesInput}>
            <div className={stylesInput.InputWrapper}>
                {!!icon && <Icon type={icon} className={styles.FieldIcon}/>}

                <input
                    name={name}
                    type={type}
                    className={classesField}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={!!disabled}
                />
            </div>
           
            {!!error && !!errorText && <InputError message={errorText}/>}
        </div>
    )
}

export default Input;