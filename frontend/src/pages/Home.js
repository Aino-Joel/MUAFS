import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header/>
      <section className="hero"  >
      <div className="content">
        <h1>MUAFS</h1>
        <p>
          {" "}
          Trust us to get you a home away from home
        </p>
        <Link to={'/hostels'}>Start Now</Link>
      </div>
    </section>
    <div class = "product">
                <h2 class = "product-category">Recommended for you</h2>
                <div class = "product-container">
                    <div class = "product-card">
                        <div class = "product-image">  
                        <img src = "https://i.pinimg.com/564x/b1/04/5f/b1045fdf96ef94318d120bdd917ded2d.jpg" class = "product-thumb" alt = ""/>
                    </div>
                    <div class = "product-info">
                        <br/>
                    <h2 class = "product-brand"><Link to={'/hostels'}>Nakiyingi Hostel</Link></h2>
                    <br/>
                  
                <span class = "price">shs 1,100,000</span><span class = "actual-price">4.5(1234) </span>
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                <h2 class = "product-brand">Olympia Hostel, Kikoni</h2>
                <br/>
                <span class = "price">shs 900000</span><span class = "actual-price">ugshs 85000 </span>
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                <h2 class = "product-brand">Waveny Hostel,Kikoni</h2>
                <br/>
                <span class = "price">ugshs 52000</span><span class = "actual-price">ugshs 65000 </span>
                </div>
                </div>
                <div class = "product-card">
                    <div class = "product-image">
                       
                    <img src = "./pictures/room1.jpg" class = "product-thumb" alt = ""/>
                </div>
                <div class = "product-info">
                    <br/>
                <h2 class = "product-brand">Soam</h2>
                <br/>
                <span class = "price">ugshs 52000</span><span class = "actual-price">ugshs 65000 </span>
                
            </div>
                
            </div>
            </div>
            </div>
    </div>
  )
}

export default Home
