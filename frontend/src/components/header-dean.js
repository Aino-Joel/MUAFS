import React from 'react'
import {BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
 


 function Header(openSidebar){
  return (
     <header className='header'>
         <div className='menu-icon'>
             <BsJustify className='icon' onClick={openSidebar}/>
         </div>
        <div className='header-left'>
          <div className='search-container' placeholder = 'search hostels'>
            <input type="text" className="search-input" placeholder="Search hostels..." />
           
            <BsSearch  className='search_icon' />
            
           
            </div>
        </div>
    

        <div className='header-right'>
             
             <BsPersonCircle className='icon'/> The dean
            
        </div>  
        </header>
 )

}
      

export default Header

