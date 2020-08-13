import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'red',
    Secondary: 'blue',
    Tertiary: 'yellow',
  };
  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}> hello </Button>;
};
export const secondary = () => <Button secondary> HELLO 2 </Button>;
