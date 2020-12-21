import googleIcon from '../../resources/G_Logo.png';
// import SvgIcon from '@material-ui/core/SvgIcon';

function GlassesIcon(props) {
  return (
      <img alt='googleIcon'  src={googleIcon} style={{color: 'white', 
                                //  margin : '10px', 
                                 width: 
                                 props.size, 
                                 height: props.size
                                 }}/>
  );
}

export default GlassesIcon;
