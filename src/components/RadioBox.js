import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'; 
import { optionsKnob } from '@storybook/addon-knobs';

const RadioBox = ({
  label, 
  value, 
  onChange, 
  options, 
  ...other
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row
        value={value && value.id}
        onChange={e => {
          const selected = options.filter(option => option.id.toString() === e.target.value);
          onChange(selected[0]);
        }}
        {...other}
      >
        {options.map(({ id, name }, i) => (
          <FormControlLabel 
            key={i}
            value={id}
            control={<Radio/>}
            label={name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBox
