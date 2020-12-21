import Label from '../../resources/label.svg';
// import SvgIcon from '@material-ui/core/SvgIcon';

function LabelIcon(props) {
  return (
      <img  alt='glasses' src={Label} style={{color: 'white', 
                                //  margin : '10px', 
                                 width: 
                                 props.size, 
                                 height: props.size
                                 }}/>
  );
}

export default LabelIcon;
