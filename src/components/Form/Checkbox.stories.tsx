import React from 'react';
import Checkbox from './Checkbox';

const onChange = () => false;

export default { title: 'Checkbox' };

export const Default = () => (
    <Checkbox
        name={'test'}
        value={false}
        onChange={onChange}
    >Some text</Checkbox>
);

export const Checked = () => (
    <Checkbox
        name={'test'}
        value={true}
        onChange={onChange}
    >Some text</Checkbox>
);

export const WithError = () => (
    <Checkbox
        name={'test'}
        value={false}
        onChange={onChange}
        error={true}
        errorText={'Some error'}
    >Some text</Checkbox>
);
