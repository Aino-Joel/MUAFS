import { useEffect } from "react";
import { Link } from "react-router-dom";
import HostelList from "./HostelList";
import { useHostelsContext } from '../hooks/useHostelsContext'

function Home() {
  const {hostels, dispatch} = useHostelsContext()

  useEffect(() => {
    const fetchHostels = async () => {
      const response = await fetch('/api/hostels')
      const json = await response.json()

      if(!response.ok){
          console.log('Error')
      }

      if(response.ok){
          dispatch({type: 'SET_HOSTELS', payload: json})
      }
    }  

  fetchHostels()
    
  }, [dispatch])
    
  return (
    <div>
      <section className="hero">
        <div className="content">
          <h1>CampusCrib</h1>
          <p> Trust us to get you a home away from home</p>
          <Link to={"/hostels"}>Start Now</Link>
        </div>
      </section>
      <div className="product">
        <h2 class="product-category">Recommended for you</h2>
        <div class="product-container">
          {hostels && hostels.map((hostel) => (
            <HostelList key={hostel._id} hostel={hostel} />
          ))}
        </div>
      </div>
      
      <div className="product">
        <h2 className="product-category">
          Popular Residences <tr />
        </h2>
        <span className="price">
          <Link to={"/hostels"}>View all hostels</Link>
        </span>
        <br />
        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <img
                src="./pictures/room1.jpg"
                className="product-thumb"
                alt=""
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Olympia Hostel, Kikoni</h2>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./pictures/room1.jpg"
                className="product-thumb"
                alt=""
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Julianna Girls' Hostel, Kikoni</h2>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./pictures/room1.jpg"
                className="product-thumb"
                alt=""
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Aryan Hostel, Wandegeya</h2>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./pictures/room1.jpg"
                className="product-thumb"
                alt=""
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Muhika Hostel, Kikoni</h2>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./pictures/room1.jpg"
                className="product-thumb"
                alt=""
              />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Baskon Hostel, Kikoni</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
