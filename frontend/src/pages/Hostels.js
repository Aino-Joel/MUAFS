import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";

function Hostels() {
  return (
    <div>
        <Header/>
        <section className="hero"  >
      <div className="content">
      </div>
    </section>
        <div class = "description">
                <h2 class = "description-category">Description</h2>
                <div class = "description-container">
                    
                
              loren ipsum This website uses cookies and similar technologies to understand visitor experiences. By using this website, you consent to UNC-Chapel Hill's cookie usage in accordance with their Privacy Notice.
I Accept
skip to the end of the global utility bar
THE UNIVERSITY of NORTH CAROLINA at CHAPEL HILL
AccessibilityEventsLibrariesMapsDepartmentsConnectCarolinaUNC Search
Sk
Original paragraph


            </div> 
            <br/> 
            <Link className="description-header" to={'/hostels'}>See more</Link>
            <h4 className="description-header">See More</h4>
            </div>
    </div>
  )
}

export default Hostels
