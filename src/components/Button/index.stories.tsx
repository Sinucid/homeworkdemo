import React from 'react';
import Button from './index';

const onCLick = () => false;

export default { title: 'Button' };

export const Default = () => (
    <Button
        onClick={onCLick}
    >Hello Button</Button>
);

export const Disabled = () => (
    <Button
        onClick={onCLick}
        disabled={true}
    >Hello Button</Button>
);

export const Loading = () => (
    <Button
        onClick={onCLick}
        loading={true}
    >Hello Button</Button>
);