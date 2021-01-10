import React from 'react';
import { 
         InputAdornment, 
         TextField, 
      } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
import GenderIcon from '../../CustomIcons/GenderIcon';
import MeasuringTapeIcon from '../../CustomIcons/MeasuringTapeIcon';
import TextileIcon from '../../CustomIcons/TextileIcon';
import LabelIcon from '../../CustomIcons/LabelIcon';

function GlassesDataFields(props) {
  // const {
  //   sku,
  //   size, 
  //   appearance,
  //   lensType,
  //   material,
  //   ODSphere,
  //   OSSphere,
  //   ODCylinder,
  //   OSCylinder,
  //   ODAxis,
  //   OSAxis,
  //   ODAdd,
  //   OSAdd
  // } = props.getters;

  const {
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
  } = props.setters;


  return (
    <>
      {props.showSKU ?  
        <TextField 
            className='Search-field'
            style={{
            height: '40px',
            margin: '15px'
            }}
            inputProps={{
              style: { height: '3px'}
            }}
            onChange={(e) => setSKU(e.target.value)}
            id="outlined-basic" 
            label="SKU *" 
            variant="outlined"
            InputProps={{
            startAdornment: <InputAdornment  
            position="start"><LabelIcon size={15} /></InputAdornment>,
            }}
       />
       :
        null
       }
      <Autocomplete
        onChange={(e,v) => setSize(v)}
        id="Size"
        options={['Child','Small','Medium','Large']}
        className='Search-field'
        size='small'
        renderInput={(params) => <TextField {...params}  label="Size *" variant="outlined" InputProps={{...params.InputProps,
          startAdornment: <InputAdornment position="start"><MeasuringTapeIcon size={23} /></InputAdornment>,
        }}/>}
      />
      <Autocomplete
        onChange={(e,v) => setLensType(v)}
        id="Lens Type"
        options={['Single','Bifocal','Progressive']}
        className='Search-field'
        size='small'
        renderInput={(params) => <TextField {...params} label="Lens Type *" variant="outlined" InputProps={{...params.InputProps,
          startAdornment: <InputAdornment position="start"><GlassesIcon size={27} /></InputAdornment>,
        }}/>}
      />
      <Autocomplete
        onChange={(e,v) => setAppearance(v)}
        id="Appearance"
        options={['Neutral','Feminine']}
        className='Search-field'
        size='small'
        renderInput={(params) => <TextField {...params} label="Appearance" variant="outlined"         
        InputProps={{...params.InputProps,
          startAdornment: <InputAdornment position="start"><GenderIcon size={24} /></InputAdornment>,
        }}/>}
      />
      <Autocomplete
        onChange={(e,v) => setMaterial(v)}
        id="Material"
        options={['Metal','Plastic']}
        className='Search-field'
        size='small'
        renderInput={(params) => <TextField {...params} label="Material" variant="outlined" InputProps={{...params.InputProps,
          startAdornment: <InputAdornment position="start"><TextileIcon size={23} /></InputAdornment>,
        }}/>}
      />
      <div className='Search-ODOS'  >
        <TextField className='Search-ODOS-field'
        style={{ width: '40%' }} 
          id="outlined-basic" 
          variant="outlined"
          onChange={(e) => setODSphere(e.target.value)}
          inputProps={{ step:.25, type: 'number', min: -20, max: 20, style: { height: '5px'}}}
          InputProps={{
              startAdornment: <InputAdornment position="start">OD</InputAdornment>,
            }}
          label="Sphere *"
        />
        <TextField 
          className='Search-ODOS-field'
          style={{ width: '40%' }}
          onChange={(e) => setOSSphere(e.target.value)}
          id="outlined-basic" 
          variant="outlined" 
          inputProps={{step:.25, type: 'number', min: -20, max: 20, style: { height: '5px'}}}
          InputProps={{
              startAdornment: <InputAdornment position="start">OS</InputAdornment>,
            }}
          label="Sphere *"
        />
      </div>
      <div className='Search-ODOS'  >
        <TextField className='Search-ODOS-field' 
        style={{ width: '40%' }}
          id="outlined-basic" 
          variant="outlined"
          onChange={(e) => setODCylinder(e.target.value)}
          inputProps={{ step:.25, type: 'number', min: -6, max: 0, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OD</InputAdornment>,
          }}
          label="Cylinder *"
        />
        <TextField className='Search-ODOS-field'
        style={{ width: '40%' }} 
          id="outlined-basic" 
          variant="outlined" 
          onChange={(e) => setOSCylinder(e.target.value)}
          inputProps={{ step:.25, type: 'number', min: -6, max: 0, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OS</InputAdornment>,
          }}
          label="Cylinder *"
        />
      </div>
      <div className='Search-ODOS'  >
        <TextField className='Search-ODOS-field' 
        style={{ width: '40%' }} 
          id="outlined-basic" 
          variant="outlined"
          onChange={(e) => setODAxis(e.target.value)}
          inputProps={{ step:1, type: 'number', min: 1, max: 180, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OD</InputAdornment>,
          }}
          label="Axis *"
        />
        <TextField 
          style={{ width: '40%' }} 
          className='Search-ODOS-field' 
          id="outlined-basic" 
          variant="outlined" 
          onChange={(e) => setOSAxis(e.target.value)}
          inputProps={{step:1, type: 'number', min: 1, max: 180, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OS</InputAdornment>,
          }}
          label="Axis *"
        />
      </div>
      <div className='Search-ODOS'  >
        <TextField className='Search-ODOS-field' 
        style={{ width: '40%' }} 
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => setODAdd(e.target.value)}
          inputProps={{ step:.5, type: 'number', min: .5, max: 4, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OD</InputAdornment>,
          }}
          label="Add *"
        />
        <TextField className='Search-ODOS-field' 
        style={{ width: '40%' }} 
          id="outlined-basic" 
          variant="outlined"
          onChange={(e) => setOSAdd(e.target.value)}
          inputProps={{ step:.5, type: 'number', min: .5, max: 4, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OS</InputAdornment>,
          }}
          label="Add *"
        />
      </div>
    </>
  );
}

export default GlassesDataFields;
