import './Search.css';
import React, {useState} from 'react';
import { 
  // InputAdornment, 
  Button, 
  // TextField, 
} from '@material-ui/core';
import {searchGlasses} from '../../../../api_actions/index';
import GlassesDataFields from '../GlassesDataFields' 
import CircularProgress from '@material-ui/core/CircularProgress';
import {Results} from "../Results";


const handleSearch = (createAlert,data) => {
  try{
    const fieldValidation = 
    data.uid &&
    data.organizationId &&
    data.glassesToMatch.size && 
    data.glassesToMatch.lensType &&
    data.glassesToMatch.ODSphere &&
    data.glassesToMatch.OSSphere &&
    data.glassesToMatch.ODCylinder &&
    data.glassesToMatch.OSCylinder &&
    data.glassesToMatch.ODAxis &&
    data.glassesToMatch.OSAxis &&
    data.glassesToMatch.ODAdd &&
    data.glassesToMatch.OSAdd;
    if(!fieldValidation){
      throw new Error("Please fill out all required fields before adding!")
    }
    searchGlasses(createAlert, data)
  }catch(e){
    createAlert('warning', e.toString())
  }
}

function Search(props) {
  const [size, setSize] = useState('');
  const [appearance, setAppearance] = useState('');
  const [lensType, setLensType] = useState('');
  const [material, setMaterial] = useState('');
  
  const [ODSphere, setODSphere] = useState('');
  const [OSSphere, setOSSphere] = useState('');

  const [ODCylinder, setODCylinder] = useState('');
  const [OSCylinder, setOSCylinder] = useState('');

  const [ODAxis, setODAxis] = useState('');
  const [OSAxis, setOSAxis] = useState('');

  const [ODAdd, setODAdd] = useState('');
  const [OSAdd, setOSAdd] = useState('');

  const [searched, setSearched] = useState(false);
  const [glasses, setGlasses] = useState([]);
  

  const getters = {
    size, 
    appearance,
    lensType,
    material,
    ODSphere,
    OSSphere,
    ODCylinder,
    OSCylinder,
    ODAxis,
    OSAxis,
    ODAdd,
    OSAdd
  }
  const setters = {
    setSize,
    setAppearance,
    setLensType,
    setMaterial,
    setODSphere,
    setOSSphere,
    setOSCylinder,
    setODCylinder,
    setOSAxis,
    setODAxis,
    setODAdd,
    setOSAdd
  }

  if(!searched){
    return (
      <div className="Search">
        <div className="Search-title">
          Search for the best mach of glasses!
        </div>
        <GlassesDataFields createAlert={props.createAlert} getters={getters} setters={setters} showSKU={false} />
        <Button style={{ width: '50%', margin: '10px' }} 
        onClick={() => {
          setSearched(true);
          searchGlasses(
            props.createAlert,
            setGlasses,
            {
              uid : 'retefgds',
              organizationId: props.selectedOrganization.id,
              "glassesToMatch": {
                size, 
                appearance,
                lensType,
                material,
                ODSphere,
                OSSphere,
                ODCylinder,
                OSCylinder,
                ODAxis,
                OSAxis,
                ODAdd,
                OSAdd
              }
              })
              ;
          }}
          color='primary' variant='contained' >Search </Button>
      </div>
    );
  } 
  if(searched && !glasses.length){
    return <CircularProgress/>
  }
  else {
    return <Results glasses={glasses} 
                    glassesToMatch={{
                      size, 
                      appearance,
                      lensType,
                      material,
                      ODSphere,
                      OSSphere,
                      ODCylinder,
                      OSCylinder,
                      ODAxis,
                      OSAxis,
                      ODAdd,
                      OSAdd
                    }}/>
  }
}

export default Search;
