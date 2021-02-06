import './Results.css';
import React, {useState, useEffect} from 'react';
import { 
         Button
      } from '@material-ui/core';
import GlassesDataFields from '../GlassesDataFields' 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getGlasses} from '../../../../api_actions/index';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


function Results(props) {
  const [glasses, setGlasses] = useState([]);
  const classes = useStyles();
  useEffect(()=> {
    // glasses.length ? consle.log('derp') : 
    getGlasses(props.selectedOrganization.id,setGlasses);
  },[props])

  return (
    <div className="Add">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell align="right">Appearance</TableCell>
            <TableCell align="right">Lens Type</TableCell>
            <TableCell align="right">ODAxis</TableCell>
            <TableCell align="right">ODAdd</TableCell>
            <TableCell align="right">ODSphere</TableCell>
            <TableCell align="right">ODCylinder</TableCell>
            <TableCell align="right">ODAdd</TableCell>
            <TableCell align="right">OSAdd</TableCell>
            <TableCell align="right">OSCylinder</TableCell>
            <TableCell align="right">OSSphere</TableCell>
            <TableCell></TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {glasses.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.appearance}</TableCell>
              <TableCell align="right">{row.lensType}</TableCell>

              <TableCell align="right">{row.ODAxis}</TableCell>
              <TableCell align="right">{row.ODAdd}</TableCell>
              <TableCell align="right">{row.ODSphere}</TableCell>
              <TableCell align="right">{row.ODCylinder}</TableCell>

              <TableCell align="right">{row.OSAxis}</TableCell>
              <TableCell align="right">{row.OSAdd}</TableCell>
              <TableCell align="right">{row.OSCylinder}</TableCell>
              <TableCell align="right">{row.OSSphere}</TableCell>
              <TableCell align="right"> <Button variant='contained' color="primary">Mark as Taken</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Results;


