// == Import npm
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// == Import
import './styles.css';
import RegisterForm from '../Register';
import LoginForm from '../Login';
import PasswordForm from '../ForgottenPassword';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/password" component={PasswordForm} />
      </Switch>
    </Router>
  </div>
);

// == Export
export default App;
