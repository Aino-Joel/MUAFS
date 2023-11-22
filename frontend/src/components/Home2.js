import { useEffect } from "react";
import { Link } from "react-router-dom";
import HostelList from "./HostelList";
import { useHostelsContext } from '../hooks/useHostelsContext'

function Home2() {
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
      
    </div>
  );
}

export default Home2;
