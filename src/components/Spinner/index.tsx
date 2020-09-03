import React, {FC} from 'react';
import stylesSpinner from './styles.module.scss';

const Spinner: FC = () => {
    return (
        <div className={stylesSpinner.SpinnerWrapper}>
            <div className={stylesSpinner.Spinner}/>
        </div>
    )
}

export default Spinner;
