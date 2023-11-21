// import logo from './logo.svg';
import React, {useState} from 'react';
// import { useState } from 'react'
import './App.css';
// import Header from './header'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Header from './components/header';
import CreateAccount from './components/createaccount';
import ViewHostels from './components/hostels';
import PieChart from './components/analytics';
import './css/header.css';
import './css/sidebar.css';
import './css/home.css';
import './css/account.css';
import './css/hostels.css'
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
{/* <Home /> */}
<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
<Header OpenSidebar={OpenSidebar}/>
{/* <CreateAccount />
 <PieChart /> */}

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/hostels' element = {<ViewHostels />}></Route>
        <Route path='/createaccount'element = {<CreateAccount />} ></Route>
        <Route path='/hostels' element = {<ViewHostels />}></Route>
      
        
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
  



