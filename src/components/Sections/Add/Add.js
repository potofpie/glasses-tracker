import './Add.css';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '50%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Add() {
  const classes = useStyles();
  return (
    <div className="Add">
        <FormControl disabled className={classes.formControl} variant="outlined">
        <InputLabel  htmlFor="outlined-adornment-amount" >SKU</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            // startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            labelWidth={30}
          />
        </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-Gender-native-simple">Age</InputLabel>
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'Age',
            id: 'outlined-Age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='Baby'>Baby</option>
          <option value='Child'>Child</option>
          <option value='Adult'>Adult</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-Gender-native-simple">Gender</InputLabel>
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          label="Gender"
          inputProps={{
            name: 'Gender',
            id: 'outlined-Gender-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Unisex'>Unisex</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-Gender-native-simple">Bifocal</InputLabel>
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          label="Bifocal"
          inputProps={{
            name: 'Bifocal',
            id: 'outlined-Bifocal-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-Gender-native-simple">Transition Lens</InputLabel>
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          label="transition lens"
          inputProps={{
            name: 'transition lens',
            id: 'outlined-transition-lens-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default Add;
