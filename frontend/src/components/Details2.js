import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "../pages/NotFound";

function Details() {
    const { _id } = useParams();
    const [hostel, setHostel] = useState(null)

  useEffect(() => {
    const fetchHostel = async () => {
      const response = await fetch('/api/hostels/'+_id)
      const json = await response.json()

      if(response.status == "404"){
        <NotFound />
      }

      if(!response.ok){
          console.log('Error')
      }

      if(response.ok){
        console.log(json)
        setHostel(json)
      }
    }  

  fetchHostel()
    
  }, [])

  return (
    <div>
      <br />
      {hostel && <h1>{ hostel.name }</h1>}
      <div className="main-banner" id="top">
        
        <Link to={"/"+_id+"/book"}>
          <button className="button">Book a Room</button>
        </Link>
      </div>

      <div className="container mt-4">
        <h4 className="display-6">What the hostel offers</h4>
        <hr />
        <div className="container mt-10">
          <div className="row mb-10">
            <div className="col-12 col-sm-6 p-0 mb-0">
              <ul className="list-unstyled list-group-custom">
                <li className="list-custom">
                  WiFi
                </li>
              </ul>
            </div>
          </div>

          <hr />
        </div>
      </div>
      <div className="description">
        <h2 className="description-category">Description</h2>
        <div className="description-container">
          loren ipsum This website uses cookies and similar technologies to
          understand visitor experiences. By using this website, you consent to
          UNC-Chapel Hill's cookie usage in accordance with their Privacy
          Notice. I Accept skip to the end of the global utility bar THE
          UNIVERSITY of NORTH CAROLINA at CHAPEL HILL
          AccessibilityEventsLibrariesMapsDepartmentsConnectCarolinaUNC Search
          Sk Original paragraph
        </div>
        <br />
        <h4 className="heading">Rooms available</h4>
        <table className='"table table-striped"'>
          <thead>
            <tr>
              <th scope="col">Type of Room</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Buzzcocks</td>
              <td>1976</td>
            </tr>
            <tr>
              <td scope="row">The Clash</td>
              <td>1976</td>
            </tr>

            <tr>
              <td scope="row">The Stranglers</td>
              <td>1974</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3 className="description-container">Location</h3>
        <p className="description-container">
          AccessibilityEventsLibrariesMapsDepartmentsConnectCarolinaUNC Search
          Sk Original paragraph
        </p>
        <Link to={"/book"}>
          <button className="buttons">Get directions</button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
