import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.scss';
import "./Fonts/awsomeIcons";


import {AuthProvider} from './Context/auth';
import AuthRoute from './util/authRoute';

import Home from './Pages/home'
import Login from './Pages/login'
import Register from "./Pages/register";




function App() {
  return ( 
     <AuthProvider>
        <Router> 
          <Route exact path='/' component={Home}/>  
          <AuthRoute exact path='/login' component={Login}/>
          <AuthRoute exact path='/register' component={Register}/>
       </Router>   
     </AuthProvider>
  );
}

export default App;
