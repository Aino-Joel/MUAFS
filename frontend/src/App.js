// import logo from './logo.svg';
import React from 'react';
// import { useState } from 'react'
import './App.css';
import Header from './header'
import Sidebar from './sidebar'
import Home from './home'


 
   

function App() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  //  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/>
      <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home /> */}
      <Header />
      <Sidebar />
      <Home />


    </div>
  );
}

export default App
  



