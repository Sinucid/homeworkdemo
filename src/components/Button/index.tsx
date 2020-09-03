import React, {FC, MouseEvent} from 'react';
import Spinner from '../Spinner';
import {IButtonProps, IButtonLoadingProps} from '../../types/Button';
import cx from 'classnames';
import styles from './styles.module.scss';

interface IProps extends IButtonProps, IButtonLoadingProps {}

const Button: FC<IProps> = ({
    children,
    type = 'default',
    buttonType = 'button',
    onClick,
    disabled = false,
    loading
}) => {
    const classes = cx(
        styles.Button,
        styles[type],
        {[styles.disabled]: !!disabled}
    );
    
    const handleCLick = (event: MouseEvent) => {
        if (!!onClick){
            onClick(event);
        }
    }

    return (
        <button
            type={buttonType}
            className={classes}
            disabled={disabled || loading}
            onClick={(event) => handleCLick(event)}
        >
            {loading && <Spinner/>}
            {!loading && <span className={styles.ButtonTitle}>{children}</span>}
        </button>
    )
}

export default Button;