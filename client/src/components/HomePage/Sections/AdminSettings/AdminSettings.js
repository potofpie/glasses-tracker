import './AdminSettings.css';
import React, {useState,useEffect} from 'react';
import LabelIcon from '@material-ui/icons/Label';
import BusinessIcon from '@material-ui/icons/Business';
import {db} from '../../../../config/firebase' 
import {   
        InputAdornment, 
        TextField, 
        Button
      } from '@material-ui/core';


function AdminSettings(props) {
  const [orgObject,setOrgObject] = useState(null)
  // const organization = db.collection('organizations').get(props.selectedOrganization)
  // console.log(organization)
  // useEffect(()=> {
  //   if(!orgObject){
  //     setOrgObject(
  //         db.collection('organizations')
  //         .get(props.selectedOrganization)
  //         .data()
  //       )
  //   }
  // })
  
  
  return (
    <div className="Add">
      <BusinessIcon style={{fontSize: '100px'}}/>
      <div className="AdminSettings-title">
        Change organization settings here!
      </div>
      {/* {orgObject.name} */}
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
