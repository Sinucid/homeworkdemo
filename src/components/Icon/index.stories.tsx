import React from 'react';
import Icon from './index';

export default { title: 'Icon' };

export const Default = () => (
    <Icon type="lock"/>
);

export const CustomSize = () => (
    <Icon width={'64px'} height={'64px'} type="lock"/>
);