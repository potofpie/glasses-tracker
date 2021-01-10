import './AdminSettings.css';
import React from 'react';
import LabelIcon from '../../../CustomIcons/LabelIcon'
import {   
        InputAdornment, 
        TextField, 
        Button
      } from '@material-ui/core';


function AdminSettings() {
  return (
    <div className="Add">
      <div className="AdminSettings-title">
        Change organization settings here!
      </div>
      <TextField 
            className='Search-field'
            style={{
            height: '40px',
            margin: '15px'
            }}
            inputProps={{
              style: { height: '3px'}
            }}
            // onChange={(e) => setSKU(e.target.value)}
            id="outlined-basic" 
            label="Name *" 
            variant="outlined"
            InputProps={{
            startAdornment: <InputAdornment  
            position="start"><LabelIcon size={15} /></InputAdornment>,
            }}
       />
      <Button style={{ width: '50%', margin: '10px' }} color='primary' variant='contained' >Save</Button>
      <Button style={{ width: '50%', margin: '10px' }} color='secondary' variant='contained' >Cancel</Button>
    </div>
  );
}

export default AdminSettings;
