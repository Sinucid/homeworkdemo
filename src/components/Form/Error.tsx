import React, {FC} from 'react';
import styles from './Error.module.scss';

const InputError: FC<{message: string}> = ({message}) => {
    return (<div className={styles.Error}>{message}</div>);
}

export default InputError;
