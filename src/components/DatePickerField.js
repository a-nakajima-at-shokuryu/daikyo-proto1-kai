import React, { useEffect } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'; 
import DateFnsUtils from '@date-io/date-fns';
import { useTheme, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import ja from 'date-fns/locale/ja';
import { blue } from '@material-ui/core/colors';
import { isSameDay, getDay } from 'date-fns';

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
  value, 
  onChange, 
  utils = DateFnsUtils, 
  locale = ja, 
  format = "yyyy-MM-dd", 
  variant = "dialog", 
  autoOk = true, 
  weekStartsOn = 0, 
  ...other
}) => {
  useEffect(() => {
    locale.options.weekStartsOn = weekStartsOn;
  }, [weekStartsOn]);

  const primaryMain = blue[700];
  const colors = useColors();
  const sundayColor = colors[0];
  const saturdayColor = colors[6];
  const sundayPos = (0 - weekStartsOn + 7) % 7;
  const saturdayPos = (6 - weekStartsOn + 7) % 7;

  const date = value || Date.now();

  const customizedTheme = createMuiTheme({
    palette: {
      primary: { main: colors[getDay(date)] || primaryMain }, 
    },
    overrides: {
      MuiPickersDay: {
        current: { color: primaryMain }, 
      }, 
      MuiPickersCalendarHeader: {
        dayLabel: {
          [`&:nth-child(${sundayPos + 1})`]: { color: sundayColor }, 
          [`&:nth-child(${saturdayPos + 1})`]: { color: saturdayColor }, 
        }, 
      }, 
    }, 
  });

  const renderDay = (date, selectedDate, dayInCurrentMonth, dayComponent) => {
    const selected = isSameDay(date, selectedDate);
    const dayColor = selected ? undefined : colors[getDay(date)];
    return React.cloneElement(dayComponent, {
      style: { color: dayColor }, 
    });
  };

  console.log('addon-console test!');
  
  return (
    <MuiThemeProvider theme={customizedTheme}>
      <MuiPickersUtilsProvider utils={utils} locale={locale}>
        <KeyboardDatePicker 
          value={value}
          onChange={onChange}
          format={format}
          variant={variant}
          autoOk={autoOk}
          renderDay={renderDay}
          {...other}
        />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

export default DatePickerField
