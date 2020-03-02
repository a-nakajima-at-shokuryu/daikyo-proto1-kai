import React, { useState } from 'react'; 
import { withKnobs, object } from '@storybook/addon-knobs'
import SelectBox from './SelectBox'; 

export default {
  title: 'セレクトボックス',
  decorators: [ withKnobs ],  
}



export const Default = () => {
  const [value, onChange] = useState(null);

  const options = object(
    'オプション', 
    [
      { id: 0, name: 'オプション１', }, 
      { id: 1, name: 'オプション２', }, 
      { id: 2, name: 'オプション３', }, 
      { id: 3, name: 'オプション４', }, 
    ], 
  )

  return (
    <React.Fragment>
      <SelectBox 
        label="セレクトボックス"
        value={value}
        onChange={(e, value) => onChange(value)}
        options={options}
        getOptionLabel={option => `${option.id} - ${option.name}`}
      />
      <pre>{JSON.stringify({ value })}</pre>
    </React.Fragment>
  );
};