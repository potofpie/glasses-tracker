import { useAuth } from '../../utils/auth/Auth-context'
import {
  Route,
  Redirect
} from "react-router-dom";

function PrivateRoute(props) {
    const {user} =  useAuth();
    return (
    <>
        {user ? <Route path={props.path} component={props.component}/> : <Redirect to="/login" /> }
    </>  
    );
}

export default PrivateRoute;
