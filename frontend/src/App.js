import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Header from './components/header';
import CreateAccount from './components/createaccount';
import ViewHostels from './components/hostels';
import './css/header.css';
import './css/sidebar.css';
import './css/home.css';
import './css/account.css';
import './css/hostels.css'



   
function App() {
  
  return (
    <div className='grid-container'>


<Header />
<Sidebar /> 



      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/hostels' element = {<ViewHostels />}></Route>
        <Route path='/createaccount'element = {<CreateAccount />} ></Route>
        <Route path='/hostels' element = {<ViewHostels />}></Route>
      
        
      </Routes>
  
    </div>
  );
}

export default App
  



