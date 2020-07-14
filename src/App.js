import React from 'react';
<<<<<<< HEAD
import './App.scss';
import MainPage from './MainPage';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/Login" component = {LogIn}/>
        <Route path = "/SignUp" component = {SignUp}/>
        <Route path = "/" component = {MainPage}/>
      </Switch>
    </Router>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> Initialize project using Create React App
  );
}

export default App;
