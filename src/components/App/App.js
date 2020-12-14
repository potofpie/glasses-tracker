// import logo from '../../resources/glasses.svg';
import './App.css';
import  { HomePage } from '../HomePage';
import  { Login } from '../AuthenticationPages/Login';
import  { SignUp } from '../AuthenticationPages/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
