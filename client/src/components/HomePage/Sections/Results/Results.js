import './Results.css';
import React, {useState, useEffect} from 'react';
import { 
         Button
      } from '@material-ui/core';
import { 
        DataGrid,
      } from '@material-ui/data-grid';
import GlassesDataFields from '../GlassesDataFields' 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { XGrid } from '@material-ui/x-grid';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getGlasses} from '../../../../api_actions/index';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function Results(props) {
  const classes = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const columns = [
    {
      field: "",
      headerName: "Provide",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
  
          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          return alert(JSON.stringify(thisRow, null, 4));
        };
        return <Button variant='contained' color='primary' onClick={onClick}>Mark as provided</Button>;
      }
    },
    { field: 'id', headerName: 'SKU',  'width' : 150},
    { field: 'lensType', headerName: `Lens Type: ${props.glassesToMatch.lensType}`,   'width' : 200 },
    { field: 'appearance', headerName: `Appearance: ${props.glassesToMatch.appearance}`,    'width' : 200},
    { field: 'material', headerName: `Material: ${props.glassesToMatch.material}`,    'width' : 200 },
    { field: 'size', headerName: `Size: ${props.glassesToMatch.size}`, 'width' : 200 },
    { field: 'ODSphere', headerName: `OD Sphere: ${props.glassesToMatch.ODSphere}` ,    'width' : 200 },
    { field: 'ODCylinder', headerName: `OD Cylinder: ${props.glassesToMatch.ODCylinder}` ,    'width' : 200},
    { field: 'ODAdd', headerName: `OD Axis: ${props.glassesToMatch.ODAdd}` ,    'width' : 200},
    { field: 'ODAxis', headerName: `OD Add: ${props.glassesToMatch.ODAxis}` ,    'width' : 200},
    { field: 'OSSphere', headerName: `OS Sphere: ${props.glassesToMatch.OSSphere}` ,    'width' : 200},
    { field: 'OSCylinder', headerName: `OS Cylinder: ${props.glassesToMatch.OSCylinder}`,    'width' : 200},
    { field: 'OSAdd', headerName: `OS Add: ${props.glassesToMatch.OSAdd}` ,    'width' : 200},
    { field: 'OSAxis', headerName: `OS Axis: ${props.glassesToMatch.OSAxis}` ,    'width' : 200},
  ];

    return (
      <Paper style={{margin: '20px', height: '80%'}}>
        <DataGrid       
              columns={columns}
              rows={props.glasses}
        />
      </Paper>
    );
}

export default Results;


