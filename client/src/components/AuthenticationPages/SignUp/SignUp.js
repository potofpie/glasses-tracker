import './SignUp.css';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
import GoogleIcon from '../../CustomIcons/GoogleIcon';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import { useAuth } from '../../../utils/auth/Auth-context'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

function SignUp(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState()
  const {signup} = useAuth();
  
  let onSignUp = () => {
    signup(email,password,repassword)
    props.history.replace('/')
  }

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
            onChange={(e) => {setEmail(e.target.value)}}
            startAdornment={<InputAdornment position="start"><AccountCircle/></InputAdornment>}
            labelWidth={40}
          />
        </FormControl>
        <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount" >Password</InputLabel>
          <OutlinedInput type='password'
            id="outlined-adornment-amount"
            // value={values.amount}
            onChange={(e) => {setPassword(e.target.value)}}
            startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            labelWidth={70}
          />
        </FormControl>
        <FormControl  className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount" >Re-Password</InputLabel>
          <OutlinedInput type='password'
            id="outlined-adornment-amount"
            // value={values.amount}
            onChange={(e) => {setRepassword(e.target.value)}}
            startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            labelWidth={95}
          />
        </FormControl>
        <Button
        variant="contained"
        color="default"
        className={classes.button}
      >
        Sign Up</Button>
        OR
        <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<GoogleIcon size='20px' />}
        onClick={() => onSignUp }
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
