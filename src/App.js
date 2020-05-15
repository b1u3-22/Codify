import React from 'react';
import './App.scss';
import MainPage from './MainPage';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/SignUp" component = {SignUp}/>
        <Route path = "/" component = {MainPage}/>
      </Switch>
    </Router>
  );
}

export default App;
