import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import HostelList from "./HostelList";

function Hostels() {
  const [hostels, setHostels] = useState(null)

  useEffect(() => {
    const fetchHostels = async () => {
      const response = await fetch('/api/hostels')
      const json = await response.json()

      if(!response.ok){
          console.log('Error')
      }

      if(response.ok){
        setHostels(json)
      }
    }  

  fetchHostels()
    
  }, [])
    
  return (
    <div>
      <div className="product">
        <h2 className="product-category">Recommended for you</h2>
        <div className="product-container">
          {hostels && hostels.map((hostel) => (
            <HostelList key={hostel._id} hostel={hostel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hostels;
