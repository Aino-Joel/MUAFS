// import React, { useState } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Homepage from './Homepage';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import NotificationsPage from './notifications';

function App() {
  
  return (
//     <Router>
    <div className="App">
      
         {/* <Switch> */}
           {}
           <BrowserRouter>
           <Routes>
           <Route path="/" element={ <Homepage/> } />
           <Route path="/login" element={<Login/> } />
           {/* <Route path="/notifications" element={<NotificationsPage/>} /> */}
           </Routes>
           </BrowserRouter>
        
          {/* <Route path="/home"> */}
             
           {/* </Route> 
        // //</Switch>  */}
      
    </div>

  );
}

export default App;
