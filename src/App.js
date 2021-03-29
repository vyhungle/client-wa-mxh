import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.scss'


import {AuthProvider} from './Context/auth';
/* import AuthRoute from './util/authRoute'; */

import Home from './Pages/home'
import Login from './Pages/login'




function App() {
  return ( 
     <AuthProvider>
        <Router> 
          <Route exact path='/' component={Home}/>  
          <Route exact path='/login' component={Login}/>  
       </Router>   
     </AuthProvider>
  );
}

export default App;
