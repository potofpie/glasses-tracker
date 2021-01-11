import './App.css';
import { AuthProvider } from '../../utils/auth/Auth-context';
import { OrganizationsContextProvider } from '../../utils/data/Organizations-context';
import { PrivateRoute, PublicRoute } from '../RouteTypes';
import  { HomePage } from '../HomePage';
import  { Login } from '../AuthenticationPages/Login';
import  { SignUp } from '../AuthenticationPages/SignUp';
import  { Reset } from '../AuthenticationPages/Reset';
import  { Loading } from '../AuthenticationPages/Loading';


import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <OrganizationsContextProvider>
        <div className="App">
            <Router>
              <Switch>
                <PublicRoute exact={true} path="/loading" component={Loading}/>
                <PublicRoute exact={true} path="/signup" component={SignUp}/>
                <PublicRoute exact={true} path="/login" component={Login}/>
                <PublicRoute exact={true} path="/reset" component={Reset}/>
                <PrivateRoute exact={true} path="/" component={HomePage}/>
              </Switch>
          </Router>
        </div>
      </OrganizationsContextProvider>
    </AuthProvider>
  );
}

export default App;
