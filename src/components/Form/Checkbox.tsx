import React, {FC} from 'react'
import {IInputProps, ICheckboxProps} from '../../types/Inputs';
import InputError from './Error';
import cx from 'classnames';
import styles from './styles.module.scss';
import stylesCheckbox from './Checkbox.module.scss';

interface IProps extends IInputProps, ICheckboxProps {}

const Checkbox: FC<IProps> = ({children, name, value, onChange, error, errorText}) => {

    const classes = cx(
        styles.Field,
        {[styles.FieldWithError]: !!error && !!errorText}
    );

    const classesCheckbox = cx(
        stylesCheckbox.CheckboxLabel,
        {[stylesCheckbox.checked]: !!value}
    )

    return (
        <div className={classes}>
            <div className={stylesCheckbox.Checkbox}>
                <label className={classesCheckbox}>
                    <input
                        className={stylesCheckbox.CheckboxField}
                        type="checkbox"
                        name={name}
                        checked={value}
                        onChange={onChange}
                    />
                </label>

                <div className={stylesCheckbox.CheckboxText}>{children}</div>
            </div>

            {!!error && !!errorText && <InputError message={errorText}/>}
        </div>
    )
}

export default Checkbox;
