import React, {FC} from 'react';
import {IOptionsProps} from '../../../types/Inputs';
import stylesSelect from './Select.module.scss';
import cx from 'classnames';

interface IProps extends IOptionsProps {
    uuid: string;
    value: string;
    onSelect: (value: string) => void
}

const Options: FC<IProps> = ({options, uuid, value, onSelect}) => {
    const handleSelect = (value: string): void => {
        onSelect(value);
    };

    return (
        <ul
            className={stylesSelect.SelectOptionsList}
        >{options.map((item, i) => {
            const classes = cx(
                stylesSelect.SelectOption,
                {[stylesSelect.selected]: item.value === value}
            );
        
            return (
                <li
                    className={classes}
                    key={`option-${uuid}-${i}`}
                    onClick={() => handleSelect(item.value)}
                >
                    {item.title}
                </li>
            );}
        )}
        </ul>
    );
}

export default Options;
