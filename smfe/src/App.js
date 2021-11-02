import Home from './Pages/Home/home';
import Topbar from './Components/Topbar/topbar';
import Mainpage from './Components/MainPage/mainpage';
import Login from './Pages/Login/login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import Register from './Pages/Register/register';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/">
          <Login/>
        </Route>
        <Route path= "/Login">
          <Login/>
        </Route>
        <Route path= "/Register">
          <Register/>
        </Route>
        <Route path= "/landing">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
