import React from 'react';
import Select from './index';

const onChange = () => false;
const options = require('../../../common/country.json');

export default { title: 'Select' };

export const Default = () => (
    <Select
        name={'test'}
        value={''}
        options={options}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const Disabled = () => (
    <Select
        name={'test'}
        value={''}
        disabled={true}
        options={options}
        onChange={onChange}
        placeholder={'Some placeholder'}
    />
);

export const WithError = () => (
    <Select
        name={'test'}
        value={''}
        disabled={true}
        options={options}
        onChange={onChange}
        placeholder={'Some placeholder'}
        error={true}
        errorText={'Some error'}
    />
);