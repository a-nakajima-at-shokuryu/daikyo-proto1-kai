import React, { useState } from 'react'; 
import { withKnobs, object } from '@storybook/addon-knobs'; 

import RadioBox from './RadioBox'; 

export default {
  title: 'ラジオボタン', 
  decorators: [withKnobs], 
};



export const Default = () => {
  const [value, onChange] = useState(null);

  const options = object(
    'オプション', 
    [
      { id: 0, name: 'オプション１', }, 
      { id: 1, name: 'オプション２', }, 
      { id: 2, name: 'オプション３', }, 
    ], 
  ); 
  
  return (
    <React.Fragment>
      <RadioBox 
        value={value}
        onChange={onChange}
        label="ラジオボタン"
        options={options}
      />
      <pre>{JSON.stringify({ value, options }, null, 2)}</pre>
    </React.Fragment>
  );
};