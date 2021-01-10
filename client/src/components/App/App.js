import './App.css';
import { AuthProvider } from '../../utils/auth/Auth-context';
import { PrivateRoute, PublicRoute } from '../RouteTypes';
 
import  { HomePage } from '../HomePage';
import  { Login } from '../AuthenticationPages/Login';
import  { SignUp } from '../AuthenticationPages/SignUp';
import  { Reset } from '../AuthenticationPages/Reset';


import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
    <div className="App">
        <Router>
          <Switch>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PublicRoute exact path="/login" component={Login}/>
            <PublicRoute exact path="/reset" component={Reset}/>
            <PrivateRoute path="/" component={HomePage}/>
          </Switch>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
