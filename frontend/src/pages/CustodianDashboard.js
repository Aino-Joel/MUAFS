import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// import Login from "./Login";
// import NotificationsPage from "./Notifications";
//import {useLocation} from 'react-router-dom';
//import {toast} from 'react-toastify';

const CustodianDashboard = () => {
  const [hostel, setHostel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  useEffect(() => {
    const fetchHostel = async () => {
      try {
        const response = await fetch("https://muafs-backend.onrender.com/api/custodian", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (!response.ok) {
          console.log("Error");
        }

        if (response.ok) {
          console.log("ok");
          setIsLoading(true);
          setHostel(json);
          console.log(hostel);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          // Token expired or unauthorized
          setError("Session expired. Please log in again.");
          logout(); // Clear token from localStorage
          <Navigate to="/login" />; // Redirect to login page
        } else {
          setError("An error occurred. Please try again.");
        }
      }
    };

    if (user) {
      fetchHostel();
    }
  }, [user]);

  return (
    <div className="home-page">
      {hostel !== null && hostel !== undefined && (
        <>
          <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          />
          <input type="checkbox" id="menu-toggle" />
          <div className="sidebar">
            <div className="side-header">
              <h3>
                {/* <span>
                <img
                  src="https://th.bing.com/th/id/OIP.zb1yPttTJ9gY7EDFaKRuwwHaGA?rs=1&pid=ImgDetMain"
                  height="40px"
                  width="40px"
                />
              </span> */}
                <span>MUAFS</span>
              </h3>
            </div>
            <div className="side-content">
              <div className="profile">
                <div
                  className="profile-img bg-img"
                  style={{ backgroundImage: "url(img/3.jpeg)" }}
                />
                <p>{user.username}</p>
                <small>Admin</small>
              </div>
              <div className="side-menu">
                <ul>
                  <li>
                    <a href="" className="active">
                      <span className="las la-home" />
                      <small>Dashboard</small>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="las la-user-alt" />
                      <small>Profile</small>
                    </a>
                  </li>
                  <li>
                    <Link to="/hostel-details">
                      <span className="las la-envelope" />
                      <small>Hostel Details</small>
                    </Link>
                  </li>
                  {/* <li>
                  <a href="">
                    <span className="las la-clipboard-list" />
                    <small>VIEWS</small>
                  </a>
                </li> */}
                  <li>
                    <a href="">
                      <span className="las la-shopping-cart" />
                      <small>BOOKINGS</small>
                    </a>
                  </li>
                  {/* <li>
                  <a href="">
                    <span className="las la-tasks" />
                    <small>Tasks</small>
                  </a>
                </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="main-content">
            {/* <header>
            <div className="header-content">
              <label htmlFor="menu-toggle">
                <span className="las la-bars" />
              </label>
              <div className="header-menu">
                <label htmlFor="">
                  <span className="las la-search" />
                </label>
                <div className="notify-icon">
                  <span className="las la-envelope" />
                  <span className="notify">
                    <a href="./NotificationsPage">N</a>
                  </span>
                </div>
                <div className="notify-icon">
                  <span className="las la-bell" />
                  <span className="notify">3</span>
                </div>
                <div className="user">
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(img/1.jpeg)" }}
                  />
                  <span className="las la-power-off" />
                  <span>
                    <Link to={"/Login"}>Logout</Link>
                  </span>
                </div>
              </div>
            </div>
          </header> */}
            <main>
              <div className="page-header">
                <h1>{hostel.location}</h1>
                <small>Home / Dashboard</small>
              </div>
              <div className="page-content">
                <div className="analytics">
                  <div className="card">
                    <div className="card-head">
                      <h2>ROOMS</h2>
                      <span className="las la-user-friends" />
                    </div>
                    <br />
                    <div className="card-progress">
                      <h5>AVAILABLE/OCCUPIED</h5>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head">
                      <h2>
                        <strong>REVIEWS</strong>
                      </h2>
                      <span className="las la-eye" />
                    </div>
                    <div className="card-progress">
                      <br />
                      <h5>g</h5>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head">
                      <h2>BOOKINGS</h2>
                      <span className="las la-shopping-cart" />
                    </div>
                    <br />
                    <div className="card-progress">
                      <small>Monthly revenue growth</small>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head">
                      <h2>View hostel page</h2>
                      <span className="las la-envelope" />
                    </div>
                    <br />
                    <div className="card-progress">
                      <small>New E-mails received</small>
                      <div className="card-indicator">
                        <div
                          className="indicator four"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
      <div></div>
    </div>
  );
};

export default CustodianDashboard;
