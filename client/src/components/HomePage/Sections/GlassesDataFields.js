import React, {useState} from 'react';
import { 
  Button,
         InputAdornment, 
         TextField, 
      } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
import GenderIcon from '../../CustomIcons/GenderIcon';
import MeasuringTapeIcon from '../../CustomIcons/MeasuringTapeIcon';
import TextileIcon from '../../CustomIcons/TextileIcon';
import LabelIcon from '../../CustomIcons/LabelIcon';
import Switch from '@material-ui/core/Switch';
import { validateOcularValue } from '../../../utils/field_validation/ocularValueValidation';

function GlassesDataFields(props) {
  const [generateSKU, setGenerateSKU] =  useState(false)
  const {
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
  } = props.getters;

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
        <div style={{display: 'flex', flexDirection: 'collumn', justifyContent: 'center'}} className='Search-field'>
        <TextField 
            
            style={{
            width: '100%',
            height: '40px',
            marginRight: 10
            
            }}
            inputProps={{
              style: { height: '3px'}
            }}
            onChange={(e) => setSKU(e.target.value)}
            id="outlined-basic" 
            label="SKU *"
            disabled={generateSKU}
            variant="outlined"
            value='somebillshit'
            InputProps={{
            startAdornment: <InputAdornment  
            position="start"><LabelIcon size={15} /></InputAdornment>,
            }}
       /> <Switch onChange={() => setGenerateSKU(!generateSKU)} color='primary' /> </div>
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
        style={{ width: '45%' }} 
          id="outlined-basic"
          value={ODSphere}
          variant="outlined"
          onChange={(e) => setODSphere(e.target.value)}
          onBlur={(e) => validateOcularValue('sphere', e.target.value, setODSphere, props.createAlert)}
          inputProps={{ step:.25, type: 'number', min: -20, max: 20, style: { height: '5px'}}}
          InputProps={{
              startAdornment: <InputAdornment position="start">OD</InputAdornment>,
            }}
          label="Sphere *"
        />
        <TextField 
          className='Search-ODOS-field'
          style={{ width: '45%' }}
          onChange={(e) => setOSSphere(e.target.value)}
          onBlur={(e) => validateOcularValue('sphere', e.target.value, setOSSphere, props.createAlert)}
          value={OSSphere}
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
        style={{ width: '45%' }}
          id="outlined-basic" 
          variant="outlined"
          value={ODCylinder}
          onChange={(e) => setODCylinder(e.target.value)}
          onBlur={(e) => validateOcularValue('cylinder', e.target.value, setODCylinder, props.createAlert)}
          inputProps={{ step:.25, type: 'number', min: -6, max: 0, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OD</InputAdornment>,
          }}
          label="Cylinder *"
        />
        <TextField className='Search-ODOS-field'
        style={{ width: '45%' }} 
          id="outlined-basic" 
          variant="outlined" 
          value={OSCylinder}
          onChange={(e) => setOSCylinder(e.target.value)}
          onBlur={(e) => validateOcularValue('cylinder', e.target.value, setOSCylinder, props.createAlert)}
          inputProps={{ step:.25, type: 'number', min: -6, max: 0, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OS</InputAdornment>,
          }}
          label="Cylinder *"
        />
      </div>
      <div className='Search-ODOS'  >
        <TextField className='Search-ODOS-field' 
        style={{ width: '45%' }} 
          id="outlined-basic" 
          variant="outlined"
          value={ODAxis}
          onChange={(e) => setODAxis(e.target.value)}
          onBlur={(e) => validateOcularValue('axis', e.target.value, setODAxis, props.createAlert)}
          inputProps={{ step:1, type: 'number', min: 1, max: 180, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OD</InputAdornment>,
          }}
          label="Axis *"
        />
        <TextField 
          style={{ width: '45%' }} 
          className='Search-ODOS-field' 
          id="outlined-basic" 
          variant="outlined" 
          value={OSAxis}
          onChange={(e) => setOSAxis(e.target.value)}
          onBlur={(e) => validateOcularValue('axis', e.target.value, setOSAxis, props.createAlert)}
          inputProps={{step:1, type: 'number', min: 1, max: 180, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OS</InputAdornment>,
          }}
          label="Axis *"
        />
      </div>
      <div className='Search-ODOS'  >
        <TextField className='Search-ODOS-field' 
        style={{ width: '45%' }} 
          id="outlined-basic"
          variant="outlined"
          value={ODAdd}
          onChange={(e) => setODAdd(e.target.value)}
          onBlur={(e) => validateOcularValue('add', e.target.value, setODAdd, props.createAlert)}
          inputProps={{ step:.5, type: 'number', min: .5, max: 4, style: { height: '5px'}}}
          InputProps={{
            startAdornment: <InputAdornment position="start">OD</InputAdornment>,
          }}
          label="Add *"
        />
        <TextField className='Search-ODOS-field' 
        style={{ width: '45%' }} 
          id="outlined-basic" 
          variant="outlined"
          value={OSAdd}
          onChange={(e) => {setOSAdd(e.target.value); console.log(OSAdd)}}
          onBlur={(e) => validateOcularValue('add', e.target.value, setOSAdd, props.createAlert)}
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
