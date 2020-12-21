import Gender from '../../resources/measuring-tape.svg';
// import SvgIcon from '@material-ui/core/SvgIcon';

function MeasuringTapeIcon(props) {
  return (
      <img  alt='glasses' src={Gender} style={{color: 'white', 
                                //  margin : '10px', 
                                 width: 
                                 props.size, 
                                 height: props.size
                                 }}/>
  );
}

export default MeasuringTapeIcon;
