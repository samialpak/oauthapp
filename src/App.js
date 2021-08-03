import './App.css';
import Token from './components/Token';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/token" component={Token} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
