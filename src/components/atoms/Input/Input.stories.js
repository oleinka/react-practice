import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './Input';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const normal = () => {
  return <Input />;
};

export const search = () => {
  return <Input search />;
};
