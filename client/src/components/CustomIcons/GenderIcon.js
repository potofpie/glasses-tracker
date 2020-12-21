import Gender from '../../resources/gender.svg';
// import SvgIcon from '@material-ui/core/SvgIcon';

function GenderIcon(props) {
  return (
      <img  alt='glasses' src={Gender} style={{color: 'white', 
                                //  margin : '10px', 
                                 width: 
                                 props.size, 
                                 height: props.size
                                 }}/>
  );
}

export default GenderIcon;
