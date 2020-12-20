// import logo from '../../resources/glasses.svg';
import './App.css';
import  { HomePage } from '../HomePage';
import  { NewHomePage } from '../NewHomePage';
import  { Login } from '../AuthenticationPages/Login';
import  { SignUp } from '../AuthenticationPages/SignUp';
import AuthProvider from '../../utils/provider/AuthProvider'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/" component={NewHomePage}/>
          </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
