import React from 'react';
import ContentWindow from './index';
import ContentHeader from '../ContentHeader';

export default {
    title: 'Content window'
};

export const Default = () => (
    <ContentWindow><ContentHeader>Content window</ContentHeader></ContentWindow>
);