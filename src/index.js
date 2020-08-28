import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import mainPage from './pages/mainPage/mainPage'
import about from './pages/about/about'
import signUp from './pages/signUp/signUp'
import profile from './pages/profile/profile'
import find from './pages/find/find'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path = "/SignUp" component = {signUp}/>
      <Route path = "/Find" component = {find}/>
      <Route path = "/profile/:name" component = {profile}/>
      <Route path = "/" component = {mainPage}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
