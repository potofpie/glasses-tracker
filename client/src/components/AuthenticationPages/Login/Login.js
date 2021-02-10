import './Login.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
import GoogleIcon from '../../CustomIcons/GoogleIcon';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import { useAuth } from '../../../utils/auth/Auth-context'
import {
  withRouter
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '10px',
    width: '80%'
  },
}))



function Login(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const {login} = useAuth();
  const classes = useStyles();
  let onLogin = () => {
    login(email,password)
    props.history.push('/')
  }

  return (
    <div className="Login">
      <div className="Login-card ">
      <GlassesIcon size='100px' />
      <Typography variant="h4" color='textPrimary' style={{fontFamily: 'Comfortaa', wordSpacing: '-.3ch'}}> <b style={{fontFamily: 'Comfortaa'}}>lens </b>hash</Typography>
      {/* <Typography variant="h4" color='textPrimary' style={{fontFamily: 'Comfortaa'}}>lens<b style={{fontFamily: 'Comfortaa'}}>hash</b></Typography> */}
      <TextField 
        className='Login-field'
        onChange={(e) => {setEmail(e.target.value)}}
        style={{
          height: '40px',
          margin: '5px'
        }}
        inputProps={{
          style: { height: '3px'}
        }}
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment  
        position="start"><EmailIcon size={15} /></InputAdornment>,
        }}
       />
      <TextField 
        className='Login-field'
        onChange={(e) => {setPassword(e.target.value)}}
        style={{
          height: '40px',
          margin: '5px'
        }}
        inputProps={{
          style: { height: '3px'}
        }}
        id="outlined-basic" 
        type="password" 
        label="Password" 
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment  
        position="start"><LockIcon size={15} /></InputAdornment>,
        }}
       />

      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={onLogin}
      >
        Sign in
      </Button>
      OR
      <Button
        variant="contained"
        color="default"
        disabled
        className={classes.button}
        startIcon={<GoogleIcon size='20px' />}
      >
      Sign in with google
      </Button>
      <Typography variant="caption text" color='textPrimary'>
        <Link href="/signup" >
          I need an account! 
        </Link>
      </Typography>
      <Typography variant="caption text" color='textPrimary'>
        <Link href="/reset" >
          I forgot my password! 
        </Link>
      </Typography>
      </div>

    </div>
  );
}
export default withRouter(Login);
