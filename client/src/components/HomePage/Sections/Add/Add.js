import './Add.css';
import React, {useState} from 'react';
import { 
         Button
      } from '@material-ui/core';
import GlassesDataFields from '../GlassesDataFields' 


function Add() {
  const [SKU, setSKU] = useState();
  const [size, setSize] = useState();
  const [appearance, setAppearance] = useState();
  const [lensType, setLensType] = useState();
  const [material, setMaterial] = useState();
  
  const [OSSphere, setOSSphere] = useState();
  const [ODSphere, setODSphere] = useState();

  const [OSCylinder, setOSCylinder] = useState();
  const [ODCylinder, setODCylinder] = useState();

  const [OSAxis, setOSAxis] = useState();
  const [ODAxis, setODAxis] = useState();

  const [OSAdd, setOSAdd] = useState();
  const [ODAdd, setODAdd] = useState();
  
  const getters = {
    SKU,
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
    setSKU,
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
    <div className="Add">
      <div className="Add-title">
        Add a new pair of glasses!
      </div>
      <GlassesDataFields getters={getters} setters={setters} showSKU={true} />
      <Button style={{ width: '50%', margin: '10px' }} color='primary' variant='contained' >Save </Button>
      <Button style={{ width: '50%', margin: '10px' }} color='secondary' variant='contained' >Cancel</Button>
    </div>
  );
}

export default Add;
