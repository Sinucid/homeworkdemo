import React, { FC } from 'react';
import styles from './styles.module.scss';

const ContentHeader: FC = ({children}) =>{
    return (
        <h1 className={styles.ContentHeaderH1}>{children}</h1>
    )
}

export default ContentHeader;

