import React from "react";
import CustodianDashboard from "./pages/CustodianDashboard";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
// import RoomManagement from './RoomManagement/RoomManagement';
// import CreateAccount from "./pages/CreateAccount";
import CreateAccount2 from "./pages/CreateAccount2";
import HostelDetails from "./pages/hostelDetails";
// import logo from './logo.svg';
import "./App.css";
// import Entry from './components/Entry';
// import Services from './components/Services';
// import Ratings from './components/Ratings';
import Home from "./components/Home";
import Details from "./components/Details";
import Book from "./components/Book";
// import Hostels from "./components/Hostels";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Sidebar from './components/sidebar'
import HomeDean from "./components/home-dean";
// import Header from './components/header-dean';
import CreateAccount from "./components/createaccount";
import ViewHostels from "./components/hostels-dean";
import "./css/header.css";
import "./css/sidebar.css";
// import "./css/home.css";
import "./css/account.css";
import "./css/hostels.css";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        {/* <Header /> */}

        <Header />
        {/* <Sidebar />  */}
        <Routes>
          <Route path="/admin" element={<CustodianDashboard />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/NotificationsPage" 
              render={() => <NotificationsPage Notifications={notifications} />}
            /> */}
          <Route path="/HostelDetails" element={<HostelDetails />} />
          {/* <Route path="/RoomManagement" element={<RoomManagement />}/> */}
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/CreateAccount2" element={<CreateAccount2 />} />

          <Route path="/" element={<Home />} />
          {/* <Route path="/hostels" element={<Hostels />} /> */}
          <Route path="/details" element={<Details />} />
          <Route path="/book" element={<Book />} />

          {/* <Route path='/' element={<Home />} ></Route> */}
          <Route path="/homeDean" element={<HomeDean />}></Route>
          <Route path="/hostels" element={<ViewHostels />}></Route>
          <Route path="/createaccount" element={<CreateAccount />}></Route>
          <Route path="/hostels" element={<ViewHostels />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
