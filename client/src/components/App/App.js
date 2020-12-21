import './App.css';
import  { HomePage } from '../HomePage';
import  { Login } from '../AuthenticationPages/Login';
import  { SignUp } from '../AuthenticationPages/SignUp';
import  { Reset } from '../AuthenticationPages/Reset';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // const user = null;
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/reset" component={Reset}/>
            <Route path="/" component={HomePage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
