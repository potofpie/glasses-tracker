import logo from '../../resources/glasses.svg';
import './App.css';
import  { HomePage } from '../HomePage';
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
            signup
          </Route>
          <Route path="/login">
            login
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
