import './Info.css';
import React from 'react';
import GlassesIcon from '../../../CustomIcons/GlassesIcon';
import { useAuth } from '../../../../utils/auth/Auth-context'
import { 
  Typography,

} from '@material-ui/core';

function Info(props) {
  const {auth} = useAuth();
  return (
    <div className="Info">
      {/* <GlassesIcon size='100px' /> */}
      <div className="Info-title">
        Hello {auth.currentUser.displayName}, to
      </div>
      {/* <GlassesIcon size='100px' />  */}
      <Typography variant="h4" color='textPrimary' style={{fontFamily: 'Comfortaa', wordSpacing: '-.3ch'}}> <b style={{fontFamily: 'Comfortaa'}}>lens </b>hash</Typography>
      <p>
        Currently sellected is <b>{props.selectedOrganization.name}</b>!
      </p>
      <p>
        This sites is made to help chairty organizations track inventory related to vision!
      </p>
      <p>
        <b>Documentation:</b> <a target='_blank' href='https://www.google.com' >Google Drive Link</a>   
      </p>
      <p>
        <b>Creator:</b> <a target='_blank' href='https://www.linkedin.com/in/bobbychristopher/'>Bobby Christopher</a> 
      </p>
      <p>
        <b>Source Code:</b> <a target='_blank' href='https://github.com/potofpie/glasses-tracker'>Github</a> 
      </p>
    </div>
  );
}

export default Info;
