import React from 'react';
import Heading from 'components/atoms/Heading/Heading';

export default {
  title: 'Atoms/Heading',
  component: 'Heading',
};

export const BigHeader = () => <Heading big>Notes</Heading>;
export const NormalHeader = () => <Heading>Notes</Heading>;
