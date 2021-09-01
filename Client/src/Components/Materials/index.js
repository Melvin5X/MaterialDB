import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import {apiUrl} from '../../config'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  tableHead: {
    backgroundColor: 'orange',
    color:'white'
  },
  tableCell: {
    color:'white'
  }
}));

export default function MaterialList() {
  const classes = useStyles();

  const [materials, setMaterials] = useState([]);
  useEffect(() => {
    GetMaterials()
  }, [])
  
  const GetMaterials = () => {
    fetch(`${apiUrl}/materials`)
      .then(res => res.json())
      .then(
        (result) => {
          setMaterials(result)
        }
      )
  }
  
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Materials
              </Typography>
            </Box>
            <Box>
              <Link to="/materials/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableHead} align="right">Name</TableCell>
                <TableCell className={classes.tableHead} align="left">IsVisible</TableCell>
                <TableCell className={classes.tableHead} align="left">Phase</TableCell>
                <TableCell className={classes.tableHead} align="left">Min. Temperature</TableCell>
                <TableCell className={classes.tableHead} align="left">Max. Temperature</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.ID}>
                  <TableCell align="right">{material.name}</TableCell>
                  <TableCell align="left">{material.isVisible}</TableCell>
                  <TableCell align="left">{material.typeOfPhase}</TableCell>
                  <TableCell align="left">{material.minTemperature}</TableCell>
                  <TableCell align="left">{material.maxTemperature}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}