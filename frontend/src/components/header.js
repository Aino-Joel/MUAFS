import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { FaBars } from "react-icons/fa";




 function Header(OpenSidebar){
  return (
     <header className='header'>
         <div className='menu-icon'>
             <BsJustify className='icon' />
         </div>
        <div className='header-left'>
          <div className='search-container' placeholder = 'search hostels'>
            <input type="text" className="search-input" placeholder="Search hostels..." />
           
            <BsSearch  className='search_icon' />
            
            {/* <FaBars onClick={OpenSidebar}/> */}
            </div>
        </div>
    

        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/> */}
             <BsPersonCircle className='icon'/> The dean
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg> */}
        </div>  
        </header>
 )

}
      

export default Header

