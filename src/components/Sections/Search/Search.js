import './Search.css';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  skuTextControl: {
    flex: 1,
  },
  skuformControl: {
    // display: 'flex',
    // flexDirection: 'row', 
    justifyContent: 'space-between',
    margin: theme.spacing(1),
    minWidth: 120,
    width: '50%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '50%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <div className="Add">
        <div className="Add-title">
          Search for the glasses!
        </div>
      {/* <TextField style={{ width: '50%', margin: '10px' }} id="outlined-basic" label="SKU *" variant="outlined" /> */}
      {/* <Button style={{ width: '50%', margin: '10px' }} variant='contained'>Generate</Button> */}
      <Autocomplete
        // value={value}
        // onChange={(event, newValue) => {
          // setValue(newValue);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
          // setInputValue(newInputValue);
        // }}
        id="controllable-states-demo"
        options={['Child','Small','Medium','Large']}
        style={{ width: '50%', margin: '10px' }}
        renderInput={(params) => <TextField {...params} label="Size *" variant="outlined" />}
      />
      <Autocomplete
        // value={value}
        // onChange={(event, newValue) => {
          // setValue(newValue);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
          // setInputValue(newInputValue);
        // }}
        id="controllable-states-demo"
        options={['Male','Female','Unisex']}
        style={{ width: '50%', margin: '10px' }}
        renderInput={(params) => <TextField {...params} label="Gender *" variant="outlined" />}
      />
      <Autocomplete
        // value={value}
        // onChange={(event, newValue) => {
          // setValue(newValue);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
          // setInputValue(newInputValue);
        // }}
        id="controllable-states-demo"
        options={['Single','Bifocal']}
        style={{ width: '50%', margin: '10px' }}
        renderInput={(params) => <TextField {...params} label="Lens Type *" variant="outlined" />}
      />
      <Autocomplete
        // value={value}
        // onChange={(event, newValue) => {
          // setValue(newValue);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
          // setInputValue(newInputValue);
        // }}
        id="controllable-states-demo"
        options={['Yes','No']}
        style={{ width: '50%', margin: '10px' }}
        renderInput={(params) => <TextField {...params} label="Tint" variant="outlined" />}
      />
        <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Metal','Plastic']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="Material" variant="outlined" />}
        />
      <div style={{display: 'flex', width: '50%',  }} >
        <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OS Sphere *" variant="outlined" />}
        />
              <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OD Sphere *" variant="outlined" />}
        />
      </div>
      <div style={{display: 'flex', width: '50%', }} >
        <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OS Cylinder *" variant="outlined" />}
        />
              <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OD Cylinder *" variant="outlined" />}
        />
      </div>
      <div style={{display: 'flex', width: '50%' }} >
        <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OS Axis *" variant="outlined" />}
        />
              <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OD Axis *" variant="outlined" />}
        />
      </div>
      <div style={{display: 'flex', width: '50%', }} >
        <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OD Add *" variant="outlined" />}
        />
        <Autocomplete
          // value={value}
          // onChange={(event, newValue) => {
            // setValue(newValue);
          // }}
          // inputValue={inputValue}
          // onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          // }}
          id="controllable-states-demo"
          options={['Yes','No']}
          style={{ width: '50%', margin: '10px' }}
          renderInput={(params) => <TextField {...params} label="OS Add *" variant="outlined" />}
        />

      </div>
      {/* <div style={{display: 'flex', width: '50%', margin: '10px' }} > */}
      <Button style={{ width: '50%', margin: '10px' }} color='primary' variant='contained' >Search</Button>
      {/* <Button style={{ width: '50%', margin: '10px' }} color='secondary' variant='contained' >Cancel</Button> */}
      {/* </div> */}
    </div>
  );
}

export default Search;
