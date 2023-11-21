import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import Login from './pages/login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import RoomManagement from './RoomManagement/RoomManagement';
import CreateAccount from './pages/CreateAccount';
import CreateAccount2 from './pages/CreateAccount2';
// import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Entry from './components/Entry';
// import Services from './components/Services';
// import Ratings from './components/Ratings';
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import Details from './components/Details';
import Book from './components/Book';



import Hostels from './components/Hostels';

function App() {
  return (
    <div className='App'>

           <BrowserRouter>
            {/* <Link to="/Notifications">Notifications</Link> */}
           <Routes>
           <Route path="/" element={ <Homepage/> } />
           <Route path="/Login" element={<Login/> } />
           {/* <Route path="/NotificationsPage" 
                  render={() => <NotificationsPage Notifications={notifications} />}
            />
            <Route path="/HostelDetails" element={<HostelDetails />} /> */}
            <Route path="/RoomManagement" element={<RoomManagement />}/>
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/CreateAccount2" element={<CreateAccount2 />} />
           </Routes>
           </BrowserRouter>
        
          {/* <Route path="/home"> */}
             
           {/* </Route> 
        // //</Switch>  */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/hostels' element={< Hostels />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/details' element={< Details/>}/>
        <Route path='/book' element={< Book/>}/> 
      </Routes>
      
     
     
    </div>
  );
}

export default App;
