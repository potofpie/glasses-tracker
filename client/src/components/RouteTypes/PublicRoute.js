import { useAuth } from '../../utils/auth/Auth-context'
import {
  Route,
  Redirect
} from "react-router-dom";

function PublicRoute(props) {
  const {user} =  useAuth();
  return (
    <>
     {
      user ? 
        <Redirect to="/" /> 
        : 
        <Route exact={props.exact} path={props.path} component={props.component}/>
    }
    </>  
  );
}

export default PublicRoute;
