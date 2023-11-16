import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NotificationsPage from './Notifications';
import notifications from './Notifications';
import HostelDetails from './HostelDetails/HostelDetails';
//import './HostelDetails/HostelDetails.css';
import RoomManagement from './RoomManagement/RoomManagement';
import CreateAccount from './CreateAccount/CreateAccount';
import CreateAccount2 from './CreateAccount/Createaccout2';

function App() {
  const [notifications, setNotifications] = useState(['New message', 'Friend request']);
  
  return (
//     <Router>
    <div className="App">
      
         {/* <Switch> */}
           {}
              
           <BrowserRouter>
            {/* <Link to="/Notifications">Notifications</Link> */}
           <Routes>
           <Route path="/" element={ <Homepage/> } />
           <Route path="/Login" element={<Login/> } />
           <Route path="/NotificationsPage" 
                  render={() => <NotificationsPage Notifications={notifications} />}
            />
            <Route path="/HostelDetails" element={<HostelDetails />} />
            <Route path="/RoomManagement" element={<RoomManagement />}/>
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/CreateAccount2" element={<CreateAccount2 />} />
           </Routes>
           </BrowserRouter>
        
          {/* <Route path="/home"> */}
             
           {/* </Route> 
        // //</Switch>  */}
      
    </div>

  );
}

export default App;