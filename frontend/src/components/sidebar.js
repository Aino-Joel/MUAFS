import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

 function Sidebar({openSidebarToggle, OpenSidebar}) {


    

  return (
         <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
         <div className='sidebar-title'>
             <div className='sidebar-brand'>
             <svg xmlns="http://www.w3.org/2000/svg" height="50" width="-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
 </svg> CampusCrib
             </div>

             <span className='icon close_icon'  onClick={OpenSidebar}>X</span> 

        </div>
 <hr/>
         <ul className='sidebar-list'>
            {/* <li className='sidebar-list-item'>
                 <a href="">
                     <BsGrid1X2Fill className='icon'/> 
                </a>
             </li> */}
             <li className='sidebar-list-item'>
                 <Link to = '/createaccount'>
                     <BsFillArchiveFill className='icon'/> Create Hostel Account
                  </Link>
              </li>
             {/* <li className='sidebar-list-item'>
                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Categories
//                 </a>
//             </li> */}
           {/* <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsPeopleFill className='icon'/> Students
//                 </a>
//             </li> */}
            <li className='sidebar-list-item'>
                <Link to = '/hostels'>
                    <BsListCheck className='icon'/> View Hostels
                </Link>
            </li>
             <li className='sidebar-list-item'>
                 <Link to = '/analytics'>
                    {/* <BsMenuButtonWideFill className='icon'/> Reports/ Issues */}
                    <BsMenuButtonWideFill className='icon'/> Analytics
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to = '/logout'>
                    <BsFillGearFill className='icon'/> Log out
                </Link>
            </li>
        </ul>
    </aside>
  )
 }
 



// const Sidebar = [
//     {
//         title: 'Create Hostel Account',
//         path: "/",
//         icon: <BsFillArchiveFill />,
//         cName: 'icon'
//     }
// ]
export default Sidebar