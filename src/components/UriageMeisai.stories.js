import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import UriageMeisai from './UriageMeisai'; 


export default {
  title: '売上明細', 
  addons: [ withKnobs ], 
};

export const Default = () => {
  return (
    <UriageMeisai 
    />
  );
};