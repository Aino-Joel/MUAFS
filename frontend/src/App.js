// import logo from './logo.svg';
import React from 'react';
// import { useState } from 'react'
import './App.css';
// import Header from './header'
import Sidebar from './components/sidebar'
import Home from './components/home'
import Header from './components/header';
import FormComponent from './components/register';


 
   

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
      <Routes>
        <Route path="/register.js" element= {FormComponent} />
      </Routes>


    </div>
  );
}

export default App
  



