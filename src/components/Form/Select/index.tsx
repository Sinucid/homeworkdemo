import React, { Component } from 'react';
import Options from './Options';
import SelectPortal from './Portal';
import Icon from '../../Icon';
import InputError from '../Error';
import {IInputProps, ISelectProps, IOptionsProps} from '../../../types/Inputs';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles.module.scss';
import stylesSelect from './Select.module.scss';
import {findTitle} from '../../../common/funcs';

interface IProps extends IInputProps, ISelectProps, IOptionsProps {};
interface IState {
    uuid: string;
    ContainerID: string;
    ThisID: string;
    opened: boolean;
    node: any;
    inputElement: any;
}

export default class Select extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const uuid = uuidv4();
    
        this.state = {
            uuid,
            ContainerID: `PopupContainer-${props.name}-${uuid}`,
            ThisID: `Select-${props.name}-${uuid}`,
            opened: false,
            node: null,
            inputElement: null
        }

        this.handleGlobalClick = this.handleGlobalClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.handleGlobalClick = this.handleGlobalClick.bind(this);
    }

    private inputRef = React.createRef<HTMLInputElement>();
    private openerRef = React.createRef<HTMLDivElement>();

    componentDidMount(){
        const {ContainerID} = this.state;

        const container = this.createContainer(ContainerID);
        this.setState({node: container});
        this.setState({inputElement: this.inputRef.current});

        document.addEventListener('click', this.handleGlobalClick);
    }

    componentWillUnmount(){
        const {node} = this.state;

        document.body.removeChild(node);
        document.addEventListener('click', this.handleGlobalClick);
    }
   
    handleGlobalClick(event: MouseEvent): void{
        const {node} = this.state;
        const {opened} = this.state;

        if (event.target !== this.openerRef.current && opened && !node.contains(event.target as Node)) {
            this.toggleOpened();
        }
    };

    toggleOpened(value: boolean = false): void{
        this.setState({opened: value});
    };

    createContainer(id: string): HTMLElement{
        const targetNode = document.createElement('div');
        targetNode.setAttribute('id', id);
        document.body.appendChild(targetNode);
        return targetNode;
    };

    onSelect(value: string): void{
        this.props.onChange(value);
        this.toggleOpened();
    }

    render(){
        const {name, options, value, placeholder, error, errorText} = this.props;
        const {opened, ThisID, node, inputElement, uuid} = this.state;

        const classesInput = cx(
            styles.Field,
            stylesSelect.Select,
            {[styles.FieldWithError]: error && !!errorText},
            {[stylesSelect.opened]: opened},
        );
    
        return (
            <>
                <div className={classesInput}>
                    <div className={stylesSelect.SelectWrapper}>
                        <input
                            name={name}
                            type="text"
                            disabled
                            className={stylesSelect.SelectField}
                            value={findTitle(options, value)}
                            placeholder={placeholder}
                            id={ThisID}
                            ref={this.inputRef}
                        />

                        <div
                            ref={this.openerRef}
                            className={stylesSelect.SelectTargerLayer}
                            onClick={() => this.toggleOpened(true)}
                        />

                        <div className={stylesSelect.SelectMarker}>
                            <Icon type='caretdown' width="100%" height="100%"/>
                        </div>
                    </div>

                    {!!error && !!errorText && <InputError message={errorText}/>}
                </div>

                {!!node && !!inputElement && (
                    <SelectPortal
                        targetNode={node}
                        parentNode={inputElement}
                        visible={opened}
                    >
                        <Options
                            options={options}
                            uuid={uuid}
                            value={value}
                            onSelect={this.onSelect}
                        />
                    </SelectPortal>
                )}
        </>
        )
    } 
}