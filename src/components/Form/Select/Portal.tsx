import React, {FC, useState, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import stylesSelect from './Select.module.scss';
import debounce from 'debounce';

interface IPropsPortal {
    targetNode: HTMLElement;
    parentNode: HTMLElement;
    visible: boolean;
}
interface IPosition {
    x: number;
    y: number;
    width: number;
}

const SelectPortal: FC<IPropsPortal> = ({children, targetNode, parentNode, visible}) => {
    const [position, setPosition] = useState<IPosition>({x: 0, y: 0, width: 0});

    const renderPopup = () => {
        if (!visible) {
            return null;
        }

        return (
            <div
                className={stylesSelect.Popup}
                style={{top: position.y + 'px', left: position.x + 'px', width: position.width + 'px'}}
            >
                <div
                    className={stylesSelect.PopupContent}
                >
                    {children}
                </div>
            </div>
        )
    };

    const caclSize = useCallback((): IPosition => {
        const yOffset = 6;
        const rect = parentNode.getBoundingClientRect();
        
        return {x: rect.left, y: rect.bottom + yOffset, width: rect.right - rect.left}
    }, [parentNode]);

    const updateSize = useCallback(debounce(() => {setPosition(caclSize())}, 200), []);

    const init = useCallback(() => {
        setPosition(caclSize());
    }, [caclSize]);

    useEffect(() => {
        init();

        window.addEventListener('resize', updateSize);
    
        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, [init, updateSize]);

    return ReactDOM.createPortal(
        renderPopup(),
        targetNode
    );
}

export default SelectPortal;
