import './Add.css';
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

function Proile() {
  const classes = useStyles();
  return (
    <div className="Add">
        <div className="Add-title">
          Add a new pair of glasses!
        </div>
      <Button style={{ width: '50%', margin: '10px' }} color='primary' variant='contained' >Save </Button>
      <Button style={{ width: '50%', margin: '10px' }} color='secondary' variant='contained' >Cancel</Button>
      {/* </div> */}
    </div>
  );
}

export default Proile;
