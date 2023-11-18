import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <Header />
            <section className="hero"  >
      <div className="content">
        <h1>CampusCrib</h1>
        <p>
          {" "}
          Trust us to get you a home away from home
        </p>
        <Link to={'/hostels'}>Start Now</Link>
      </div>
    </section>
    <div className = "product">
                <h2 class = "product-category">Recommended for you</h2>
                <div class = "product-container">
                    <div class = "product-card">
                        <div class = "product-image">  
                        <img src = "https://i.pinimg.com/564x/b1/04/5f/b1045fdf96ef94318d120bdd917ded2d.jpg" class = "product-thumb" alt = ""/>
                    </div>
                    <div class = "product-info">
                        <br/>
                    <h2 class = "product-brand"><Link to={'/details'}>Nakiyingi Hostel, Kikoni</Link></h2>
                    
                    <br/>
                  
                <span class = "actual-price">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg> 
        256 reviews</span>
                
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                    <h2 class = "product-brand"><Link to={'/details'}>Nakiyingi Hostel, Kikoni</Link></h2>
                    
                <br/>
                  
                <span class = "actual-price">4.5(1234) </span>
                
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                    <h2 class = "product-brand"><Link to={'/hostels'}>Nakiyingi Hostel, Kikoni</Link></h2>
                    
                <br/> 
                <span class = "actual-price">4.5(1234) </span>
                
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                       
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                    <h2 class = "product-brand"><Link to={'/hostels'}>Nakiyingi Hostel, Kikoni</Link></h2>
                    
                <br/>
                  
                <span class = "actual-price">4.5(1234) </span>
                
            </div>
                
            </div>
            </div>
            </div>
         </div>     
         
          
                 
    )
   }

export default Home