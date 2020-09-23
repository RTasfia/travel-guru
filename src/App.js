import React, { createContext, useState } from 'react';
import Home from './Component/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './Component/Booking/Booking';
import Hotel from './Component/Hotel/Hotel';
import UserStatus from './Component/UserStatus/UserStatus';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    name: "",
    password: "",
    date: ""
  })


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <UserStatus/>
          </Route>
          <Route path="/booking/:id">
            <Booking/>
          </Route>
          <PrivateRoute path="/hotel/:title">
              <Hotel/>
            </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>




      </UserContext.Provider>
  );
}

export default App;
