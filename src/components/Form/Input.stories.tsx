import React from 'react';
import Input from './Input';

const onChange = () => false;

export default { title: 'Input' };

export const Default = () => (
    <Input
        name={'test'}
        value={''}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const Password = () => (
    <Input
        type={'password'}
        name={'test'}
        value={''}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const Email = () => (
    <Input
        type={'email'}
        name={'test'}
        value={''}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const WithIcon = () => (
    <Input
        icon={'lock'}
        name={'test'}
        value={''}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const Disabled = () => (
    <Input
        disabled={true}
        name={'test'}
        value={''}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const WithError = () => (
    <Input
        name={'test'}
        value={''}
        onChange={onChange}
        placeholder={'Some placeholder'}
        error={true}
        errorText={'Some error'}
    />
);