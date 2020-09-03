import React, {FC} from 'react';
import Icons from '../../common/icon';
import cx from 'classnames';
import styles from './styles.module.scss';

interface IProps {
    type: keyof typeof Icons;
    className?: any;
    width?: string;
    height?: string;
}

const Icon: FC<IProps> = ({type, className, width, height}) => {
    const Ico = Icons[type];
    const style: {width?: string, height?: string} = !!className ? {} : {width: '20px', height: '20px'};
    
    if (width){
        style.width = width;
    }

    if (height){
        style.height = height;
    }
    
    return (
        <div
            className={cx(
                styles.IconWrapper,
                {[className]: !!className}
            )}
            style={{...style}}
        >
            <Ico width="100%" height="100%"/>
        </div>
    )
}

export default Icon;
