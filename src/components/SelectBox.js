import React from 'react';
import { Autocomplete } from '@material-ui/lab'; 
import { TextField } from '@material-ui/core';

const SelectBox = ({
  label, 
  ...others 
}) => {
  return (
    <Autocomplete
      renderInput={props => {
        return (
          <TextField
            label={label}
            {...props} 
          />
        )
      }}
      {...others}
    />
  )
}

export default SelectBox
