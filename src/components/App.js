
import React,{useState} from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
import HomePage from './HomePage';


const App = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      <Router>
      <div className="main-container">
        <nav>
          <Link to="/login">Login</Link> | <Link to="/home">Home</Link>
          <button onClick={logoutHandler}>Logout</button>
        </nav>
        
        <h1>{isAuthenticated ? "You are logged in!" : "You are not logged in."}</h1>

        <Switch>
          <Route path="/login">
            <LoginPage onLogin={loginHandler} />
          </Route>
          <PrivateRoute path="/home" component={HomePage} isAuthenticated={isAuthenticated} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App
