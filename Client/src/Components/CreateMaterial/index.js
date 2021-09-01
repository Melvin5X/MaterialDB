import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuItem } from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';
import {apiUrl} from '../../config'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: 100
  },
  isVisible: {
    marginTop: 15
  }
}));

export default function UserCreate() {
  const classes = useStyles();
  
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'name': name,
      'isVisible': isVisible,
      'minTemperature': minTemperature,
      'maxTemperature': maxTemperature,
      'typeOfPhase': phase,
    }

    fetch(`${apiUrl}/materials`, {
      method: 'POST',
      headers: {      
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      
      (result) => {
        console.log('success')
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      }
    )
   

  }

  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState('');
  const [minTemperature, setMinTemperature] = useState('');
  const [maxTemperature, setMaxTemperature] = useState('');
  const [selectError, setSelectError] = useState(false)

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
         Add Material
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fName"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                onChange={(e) => {setName(e.target.value); console.log(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Min Temperature"
                onChange={(e) => {setMinTemperature(e.target.value); console.log(e.target.value)}}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Max Temperature"
                onChange={(e) => {setMaxTemperature(e.target.value); console.log(e.target.value) }}
              />
            </Grid>
      
            <Grid item xs={12} sm={6}>
            
            <FormControl className={classes.formControl} error = {selectError}>
              <InputLabel>Phase</InputLabel>
              <Select required value={phase ? phase : ""} onChange={(e)=> {setPhase(e.target.value);console.log(e.target.value)}}>
                <MenuItem value="Solid">Solid</MenuItem>
                <MenuItem value="Liquid">Liquid</MenuItem>
              </Select>
              {selectError && <FormHelperText>This is required!</FormHelperText> }
            </FormControl>

            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel className={classes.isVisible}
                control={
                    <Checkbox
                        name="SomeName"
                        value="SomeValue"
                        checked = {isVisible}
                        onClick = { (e)=> {
                          setIsVisible(e.target.checked); console.log(isVisible)
                        }}
                    />
                }
                label="Is Visible"/>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit} onClick={()=> {setSelectError(!selectError)}}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}