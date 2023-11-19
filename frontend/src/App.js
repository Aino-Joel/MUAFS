// import logo from './logo.svg';
import React, {useState} from 'react';
// import { useState } from 'react'
import './App.css';
// import Header from './header'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Header from './components/header';
import Registration from './components/createaccount';
import ViewHostels from './hostels';
// import Register from './components/createaccount';
//  import ViewHostels from './hostels';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom"

   

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
   }

  return (
    <div className='grid-container'>
<Home />
<Header />
<Sidebar />

      <Routes>
        <Route
        path='/createaccount'
        element = {<Registration />}
        ></Route>
        <Route 
        path='/hostels'
        element = {<ViewHostels />}
        
        
        
        >

        </Route>
      </Routes>







      {/* <Header OpenSidebar={OpenSidebar}/>
      <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home /> */}
      {/* <Header />
      <Sidebar />
      <Home /> */}


      
    </div>
  );
}

export default App
  



