import './Search.css';
import React, {useState} from 'react';
import { 
  InputAdornment, 
  Button, 
  TextField, 
} from '@material-ui/core';
import GlassesDataFields from '../GlassesDataFields' 


function Search() {
  const [size, setSize] = useState(null);
  const [appearance, setAppearance] = useState(null);
  const [lensType, setLensType] = useState(null);
  const [material, setMaterial] = useState(null);
  
  const [ODSphere, setODSphere] = useState(null);
  const [OSSphere, setOSSphere] = useState(null);

  const [ODCylinder, setODCylinder] = useState(null);
  const [OSCylinder, setOSCylinder] = useState(null);

  const [ODAxis, setODAxis] = useState(null);
  const [OSAxis, setOSAxis] = useState(null);

  const [ODAdd, setODAdd] = useState(null);
  const [OSAdd, setOSAdd] = useState(null);
  

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
  return (
    <div className="Search">
      <div className="Search-title">
        Search for the best mach of glasses!
      </div>
      <GlassesDataFields getters={getters} setters={setters} showSKU={false} />
      <Button style={{ width: '50%', margin: '10px' }} color='primary' variant='contained' >Search </Button>
    </div>
  );
}

export default Search;
