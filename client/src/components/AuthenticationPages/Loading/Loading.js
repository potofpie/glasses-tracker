import './Loading.css';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core//CircularProgress';
// import LinearProgress from '@material-ui/core/LinearProgress';
import GlassesIcon from '../../CustomIcons/GlassesIcon';
import React from 'react';

function Loading() {
  return (
    <div className="Loading">
      <div className="Loading-card">
        <GlassesIcon size='100px' />
        <Typography variant="h4" color='textPrimary'>Glasses Tracker</Typography>
        <CircularProgress style={{margin: '10px'}}/>
      </div>
    </div>
  );
}
export default Loading;
