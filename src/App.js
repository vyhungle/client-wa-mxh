import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.scss'


import {AuthProvider} from './Context/auth';
/* import AuthRoute from './util/authRoute'; */

import MenuBar from './Components/MenuBar/index';
import Home from './Pages/home'



function App() {
  return ( 
     <AuthProvider>
        <Router> 
          <MenuBar/>
          <Route exact path='/' component={Home}/>      
       </Router>   
     </AuthProvider>
  );
}

export default App;
