import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";

function Details() {
  return (
    <div>
      <Header/>
      <section className="hero"  >
      <div className="content">
      <Link to={'/art'}>Book a Room</Link>
      </div>
    </section>
    </div>
  )
}

export default Details
