import React from "react";
import CustodianDashboard from "./pages/CustodianDashboard";
import Login from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
// import RoomManagement from './RoomManagement/RoomManagement';
// import CreateAccount from "./pages/CreateAccount";
// import CreateAccount2 from "./pages/CreateAccount2";
import HostelDetails from "./pages/hostelDetails";
// import logo from './logo.svg';
import "./App.css";
// import Entry from './components/Entry';
// import Services from './components/Services';
// import Ratings from './components/Ratings';
import Home from "./components/Home";
import Details from "./components/Details2";
import Book from "./components/Book";
import Hostels from "./components/Hostels";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Sidebar from './components/sidebar'
import HomeDean from "./components/home-dean";
// import Header from './components/header-dean';
import CreateAccount from "./components/createaccount";
import ViewHostels from "./components/hostels-dean";
import "./css/header.css";
import "./css/sidebar.css";
import "./css/home.css";
import "./css/account.css";
import "./css/hostels.css";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
      <div className="grid-container">
        {/* <Header /> */}

        <Header />
        {/* <Sidebar />  */}
        <Routes>
          <Route path="/admin" element={user ? <CustodianDashboard /> : <Navigate to="/login"/>} />
          <Route path="/Login" element={!user ? <Login /> : <Navigate to="/admin"/>} />
          {/* <Route path="/NotificationsPage" 
              render={() => <NotificationsPage Notifications={notifications} />}
            /> */}
          <Route path="/hostel-details" element={user ? <HostelDetails /> : <Navigate to="/login"/>} />
          {/* <Route path="/RoomManagement" element={<RoomManagement />}/> */}
          <Route path="/signup" element={ <Signup /> } />
          {/* <Route path="/CreateAccount2" element={<CreateAccount2 />} /> */}

          <Route path="/" element={<Home />} />
          {/* <Route path="/hostels" element={<Hostels />} /> */}
          <Route path="/:_id" element={<Details />} />
          <Route path="/:_id/book" element={<Book />} />

          {/* <Route path='/' element={<Home />} ></Route> */}
          <Route path="/homeDean" element={<HomeDean />}></Route>
          <Route path="/hostels" element={<Hostels />}></Route>
          <Route path="/createaccount" element={<CreateAccount />}></Route>
          <Route path="/hostels" element={<ViewHostels />}></Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
