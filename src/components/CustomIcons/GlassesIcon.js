import glasses from '../../resources/glasses.svg';
import SvgIcon from '@material-ui/core/SvgIcon';

function GlassesIcon(props) {
  return (
      <img src={glasses} style={{color: 'white', 
                                //  margin : '10px', 
                                 width: 
                                 props.size, 
                                 height: props.size
                                 }}/>
  );
}

export default GlassesIcon;
