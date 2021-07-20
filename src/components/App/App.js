import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
