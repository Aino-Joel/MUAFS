import React from "react";
import CustodianDashboard from "./pages/CustodianDashboard";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
// import RoomManagement from './RoomManagement/RoomManagement';
import CreateAccount from "./pages/CreateAccount";
import CreateAccount2 from "./pages/CreateAccount2";
// import logo from './logo.svg';
import "./App.css";
// import Entry from './components/Entry';
// import Services from './components/Services';
// import Ratings from './components/Ratings';
import Home from "./components/Home";
import Details from "./components/Details";
import Book from "./components/Book";
import Hostels from "./components/Hostels";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home2 from "./components/Home2";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/admin" element={<CustodianDashboard />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/NotificationsPage" 
              render={() => <NotificationsPage Notifications={notifications} />}
            />
        <Route path="/HostelDetails" element={<HostelDetails />} /> */}
        {/* <Route path="/RoomManagement" element={<RoomManagement />}/> */}
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateAccount2" element={<CreateAccount2 />} />

        <Route path="/" element={<Home />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/details" element={<Details />} />
        <Route path="/book" element={<Book />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
