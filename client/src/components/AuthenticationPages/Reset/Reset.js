import './Reset.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
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

function Reset() {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const {sendResetEmail} = useAuth();

  return (
    <div className="Reset">
      <div className="Reset-card ">
      <GlassesIcon size='100px' />
      <Typography variant="h4" color='textPrimary'>Glasses Tracker</Typography>
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
       <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={() => sendResetEmail(email)}
      >
        Reset Password
      </Button>
      <Typography variant="caption text" color='textPrimary'>
        <Link href="/login" >
          Nevermind!
        </Link>
      </Typography>
      </div>
    </div>
  );
}

export default Reset;
