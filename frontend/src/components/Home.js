import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <Header />
            <Link to={'/details'}>Login</Link>
       home
         </div>     
         
          
                 
    )
   }

export default Home