import './SignUp.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const {signup} = useAuth();
  
  let onSignUp = () => {
    signup(name, email,password,repassword)
    props.history.replace('/')
  }

  return (

    <div className="SignUp">
      <div className="SignUp-card ">
      <GlassesIcon size='100px' />
      <Typography variant="h4" color='textPrimary'>Glasses Tracker</Typography>
      <TextField 
        className='Login-field'
        onChange={(e) => {setName(e.target.value)}}
        style={{
          height: '40px',
          margin: '5px'
        }}
        inputProps={{
          style: { height: '3px'}
        }}
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment  
        position="start"><AccountCircle size={15} /></InputAdornment>,
        }}
       />
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
        label="Password"
        type="password" 
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment  
        position="start"><LockIcon size={15} /></InputAdornment>,
        }}
       />
      <TextField 
        className='Login-field'
        onChange={(e) => {setRepassword(e.target.value)}}
        style={{
          height: '40px',
          margin: '5px'
        }}
        inputProps={{
          style: { height: '3px'}
        }}
        id="outlined-basic" 
        label="Re-password"
        type="password"  
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
        onClick={onSignUp}
      >
        Sign Up</Button>

      <Typography variant="caption text" color='textPrimary'>
        <Link href="/login" >
          I already have an account! 
        </Link>
      </Typography>

      </div>

    </div>
  );
}

export default SignUp;
