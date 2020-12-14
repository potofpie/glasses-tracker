import './SignUp.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
import GoogleIcon from '../../CustomIcons/GoogleIcon';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

function SignUp() {
  const classes = useStyles();
  return (


    <div className="SignUp">
      <div className="SignUp-card ">
      <GlassesIcon size='100px' />
      <Typography variant="h4" color='textPrimary'>Glasses Tracker</Typography>
      {/* <Typography variant="caption text" color='textPrimary'>Sign up to get started!</Typography> */}
      <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><AccountCircle/></InputAdornment>}
            labelWidth={40}
          />
        </FormControl>
        <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount" >Password</InputLabel>
          <OutlinedInput type='password'
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            labelWidth={70}
          />
        </FormControl>
        <FormControl  className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount" >Re-Password</InputLabel>
          <OutlinedInput type='password'
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            labelWidth={95}
          />
        </FormControl>
        <Button
        variant="contained"
        color="default"
        className={classes.button}
        // startIcon={<GoogleIcon size='20px' />}
      >
        Sign Up</Button>
        OR
        <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<GoogleIcon size='20px' />}
      >
      
        Sign in with google</Button>
      <Typography variant="caption text" color='textPrimary'>
        <Link href="#" >
          I already have an account! 
        </Link>
      </Typography>
      </div>

    </div>
  );
}

export default SignUp;
