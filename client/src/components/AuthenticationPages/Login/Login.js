import './Login.css';
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
import React, {useState} from 'react';
import firebase from '../.././../utils/firebase';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const classes = useStyles();

  async function login(){
    try {
      firebase.login(email,password)
    } catch(error){
      alert(error.message)
    }
  }
  return (
    <div className="Login">
      <div className="Login-card ">
      <GlassesIcon size='100px' />
      <Typography variant="h4" color='textPrimary'>Glasses Tracker</Typography>
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
          <OutlinedInput
            id="outlined-adornment-amount"
            type='password'
            // value={values.amount}
            onChange={(e) => {setPassword(e.target.value)}}
            startAdornment={<InputAdornment position="start"><LockIcon/></InputAdornment>}
            labelWidth={70}
          />
        <Button
        variant="contained"
        color="default"
        className={classes.button}
        // startIcon={<GoogleIcon size='20px' />}
      >
        Sign in</Button>
        OR
        <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<GoogleIcon size='20px' />}
      >
      
        Sign in with google</Button>
        </FormControl>


      <Typography variant="caption text" color='textPrimary'>
        <Link href="#" >
          I need an account! 
        </Link>
      </Typography>
        
      </div>

    </div>
  );
}

export default Login;