import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import pen from 'assets/icons/pen.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'ButtonIcon',
  decorators: [withKnobs],
};

export const normal = () => {
  return <ButtonIcon icon={pen} />;
};
