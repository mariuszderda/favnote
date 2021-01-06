import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Color';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>close /save</Button>;
};
export const Secondary = () => <Button secondary>remove</Button>;
