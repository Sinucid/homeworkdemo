import React from 'react';
import Radio from './Radio';

const onChange = () => false;
const options = [
    {title: 'Test 1', value: '1'},
    {title: 'Test 2', value: '2'},
    {title: 'Test 3', value: '3'},
    {title: 'Test 4', value: '4'}
];
export default { title: 'Radio' };

export const Default = () => (
    <Radio
        name={'test'}
        value={'1'}
        onChange={onChange}
        options={options}
    />
);

export const WithError = () => (
    <Radio
        name={'test'}
        value={'1'}
        onChange={onChange}
        options={options}
        error={true}
        errorText={'Some error'}
    />
);