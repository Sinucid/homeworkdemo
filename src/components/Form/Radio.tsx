import React, {FC} from 'react'
import {IInputProps, IInputRadioProps, listItemType} from '../../types/Inputs';
import InputError from './Error';
import cx from 'classnames';
import styles from './styles.module.scss';
import stylesRadio from './Radio.module.scss';

interface IProps extends IInputProps, IInputRadioProps {}

const Radio: FC<IProps> = ({name, value, onChange, options, error, errorText}) => {

    const classes = cx(
        styles.Field,
        {[styles.FieldWithError]: !!error && !!errorText}
    );

    const createOptions = (options: Array<listItemType>) => (options.map((item: listItemType) => {
        const classesMarker = cx(
            stylesRadio.RadioMarker,
            {[stylesRadio.checked]: value === item.value}
        );

        return (
            <label
                className={stylesRadio.RadioLabel}
                key={`radio-${name}-${item.value}`}
            >
                <div className={classesMarker}/>
                <span className={stylesRadio.RadioText}>{item.title}</span>

                <input
                    className={stylesRadio.RadioField}
                    type="radio"
                    name={name}
                    value={item.value}
                    onChange={onChange}
                />
            </label>
        );
    }));

    return (
        <div className={classes}>
            <div className={stylesRadio.Radio}>
              {createOptions(options)}   
            </div>

            {!!error && !!errorText && <InputError message={errorText}/>}
        </div>
    )
}

export default Radio;
