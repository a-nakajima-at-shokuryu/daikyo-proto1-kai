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
      <Grid continer>
        <Grid item xs={12}>
          <Typography variant="h4">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}><Busho className={classes.busho} {...busho} /></Grid>
        <Grid item xs={3}><Tanto className={classes.tanto} {...tanto} /></Grid>
        <Grid item xs={2}><Baibai className={classes.baibai} {...baibai} /></Grid>
        <Grid item xs={2}><Azukari className={classes.azukari} {...azukari} /></Grid>
        <Grid item xs={2}><Henpin className={classes.henpin} {...henpin} /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}><Shoribi {...shoribi} /></Grid>
        <Grid item xs={2}><Hasseibi {...hasseibi} /></Grid>
        <Grid item xs={2}><Furikaebi {...furikaebi} /></Grid>
        <Grid item xs={2}><Nissu {...nissu} /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}><TokunoOption {...tokunoOption} /></Grid>
        <Grid item xs={3}><Haitanto {...haitanto} /></Grid>
        <Grid item xs={2}><Shukkobi {...shukkobi} /></Grid>
        <Grid item xs={2}><Meihenbi {...meihenbi} /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}><Tokuno {...tokuno} /></Grid>
        <Grid item xs={2}><Zeiku {...zeiku} /></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}><ShoriButton {...shoriButton} /></Grid>
      </Grid>
      <Grid container>
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

const Busho = props => <Select {...props}/>; 
const Tanto = props => <Select {...props}/>; 
const Baibai = props => <Kubun {...props}/>; 
const Azukari = props => <Kubun {...props}/>; 
const Henpin = props => <Kubun {...props}/>; 
const Shoribi = props => <Hiduke {...props}/>; 
const Hasseibi = props => <Hiduke {...props}/>; 
const Furikaebi = props => <Hiduke {...props}/>; 
const Nissu = props => <Select {...props}/>; 
const TokunoOption = props => <Select {...props}/>; 
const Haitanto = props => <Select {...props}/>; 
const Shukkobi = props => <Hiduke {...props}/>; 
const Meihenbi = props => <Hiduke {...props}/>; 
const Tokuno = props => <Select {...props}/>; 
const Zeiku = props => <Select {...props}/>; 
const ShoriButton = props => <Select {...props}/>; 
const Meisai = props => <Select {...props}/>; 


const Textbox = ({
  label, 
}) => {
  return (
    <TextField
    />
  );
};