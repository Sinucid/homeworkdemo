import React, {FC} from 'react';
import styles from './styles.module.scss';

const ContentWindow: FC = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ContentWindow;
