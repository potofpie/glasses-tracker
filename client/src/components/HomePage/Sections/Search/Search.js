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


function Search(props) {
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
        <GlassesDataFields getters={getters} setters={setters} showSKU={false} />
        <Button style={{ width: '50%', margin: '10px' }} 
        onClick={() => {
          searchGlasses(
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
              setSearched(true);
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
