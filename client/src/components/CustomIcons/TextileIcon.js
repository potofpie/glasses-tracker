import Textile from '../../resources/textile.svg';

function TextileIcon(props) {
  return (
      <img  alt='glasses' src={Textile} style={{color: 'white', 
                                //  margin : '10px', 
                                 width: 
                                 props.size, 
                                 height: props.size
                                 }}/>
  );
}

export default TextileIcon;
