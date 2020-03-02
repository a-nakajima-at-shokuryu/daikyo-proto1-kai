import React, { useState } from 'react';
import {
  createMuiTheme, 
  MuiThemeProvider, 
  CssBaseline, 
  Button, 
  Grid,
  TextField,
  Typography,
  makeStyles, 
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import SelectBox from './SelectBox';
import RadioBox from './RadioBox';
import DatePickerField from './DatePickerField';

export const emptyOptions = {
  value: null, 
  onChange: a => a, 
  options: [], 
};

export const useOptions = (defaultValue = undefined, other = {}) => {
  const [value, onChange] = useState(defaultValue);
  return { value, onChange, ...other }
};

const UriageDenpyoNyuryokuLayout = ({
  title = 'Title', 
  busho = emptyOptions, 
  tanto = emptyOptions, 
  baibai = emptyOptions, 
  azukari = emptyOptions, 
  henpin = emptyOptions, 
  shoribi = emptyOptions, 
  hasseibi = emptyOptions, 
  furikaebi = emptyOptions, 
  nissu = emptyOptions, 
  tokunoOption = emptyOptions, 
  haitanto = emptyOptions, 
  shukkobi = emptyOptions, 
  meihenbi = emptyOptions, 
  tokuno = emptyOptions, 
  zeiku = emptyOptions, 
  shoriButton = emptyOptions, 
  meisai = emptyOptions, 
}) => {

  const theme = createMuiTheme({
    palette: { primary: { main: blue[700] } }, 
  });

  const classes = makeStyles(theme => ({
    busho: {
      width: 200, 
    }, 
    tanto: {
      width: 200, 
    }, 
  }))();
  

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}><Busho {...busho} /></Grid>
        <Grid item xs={3}><Tanto {...tanto} /></Grid>
        <Grid item xs={2}><Baibai {...baibai} /></Grid>
        <Grid item xs={2}><Azukari {...azukari} /></Grid>
        <Grid item xs={2}><Henpin {...henpin} /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}><Shoribi {...shoribi} /></Grid>
        <Grid item xs={2}><Hasseibi {...hasseibi} /></Grid>
        <Grid item xs={2}><Furikaebi {...furikaebi} /></Grid>
        <Grid item xs={2}><Nissu {...nissu} /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}><TokunoOption {...tokunoOption} /></Grid>
        <Grid item xs={3}><Haitanto {...haitanto} /></Grid>
        <Grid item xs={2}><Shukkobi {...shukkobi} /></Grid>
        <Grid item xs={2}><Meihenbi {...meihenbi} /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}><Tokuno {...tokuno} /></Grid>
        <Grid item xs={2}><Zeiku {...zeiku} /></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}><ShoriButton {...shoriButton} /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}><Meisai {...meisai} /></Grid>
      </Grid>
    </MuiThemeProvider>
  )
};

export default UriageDenpyoNyuryokuLayout;

const Select = ({
  onChange, 
  ...other 
}) => {
  return (
    <SelectBox 
      onChange={(e, value) => onChange(value)}
      getOptionLabel={option => `${option.id} - ${option.name}`}
      options={[]}
      {...other}
    />
  );
};

const Kubun = ({
  ...other
}) => {
  return (
    <RadioBox
      {...other}
    />
  );
};

const Hiduke = ({
  ...other
}) => {
  return (
    <DatePickerField
      variant="inline"
      {...other}
    />
  );
};

const Number = ({
  onChange, 
  ...other 
}) => {
  return (
    <TextField
      type="number"
      onChange={e => onChange(e.target.value)}
      {...other}
    />
  );
};

const Submit = ({
  label, 
  ...other 
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      {...other}
    >
      {label}
    </Button>
  );
};
const Busho = props => <Select {...props}/>; 
const Tanto = props => <Select {...props}/>; 
const Baibai = props => <Kubun {...props}/>; 
const Azukari = props => <Kubun {...props}/>; 
const Henpin = props => <Kubun {...props}/>; 
const Shoribi = props => <Hiduke {...props}/>; 
const Hasseibi = props => <Hiduke {...props}/>; 
const Furikaebi = props => <Hiduke {...props}/>; 
const Nissu = props => <Number {...props}/>; 
const TokunoOption = props => <Select {...props}/>; 
const Haitanto = props => <Select {...props}/>; 
const Shukkobi = props => <Hiduke {...props}/>; 
const Meihenbi = props => <Hiduke {...props}/>; 
const Tokuno = props => <Select {...props}/>; 
const Zeiku = props => <Select {...props}/>; 
const ShoriButton = props => <Submit {...props}/>; 
const Meisai = props => <Select {...props}/>; 


const Textbox = ({
  label, 
}) => {
  return (
    <TextField
    />
  );
};