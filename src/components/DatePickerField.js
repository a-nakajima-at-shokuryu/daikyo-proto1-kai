import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'; 
import DateFnsUtils from '@date-io/date-fns';
import { useTheme } from '@material-ui/core';
import ja from 'date-fns/locale/ja'

const useColors = () => {
  const theme = useTheme();
  const sundayColor = theme.palette.secondary.main;
  const saturdayColor = theme.palette.success.dark;
  const colors = {
    0: sundayColor, 
    6: saturdayColor, 
  };
  return colors;
}

const DatePickerField = ({
  utils = DateFnsUtils, 
  locale = ja, 
}) => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={utils} locale={locale}>
        <KeyboardDatePicker />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default DatePickerField
