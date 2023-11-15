// import React, { useState } from 'react';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NotificationsPage from './Notifications';
import notifications from './Notifications';
import HostelDetails from './HostelDetails/HostelDetails';
//import './HostelDetails/HostelDetails.css';
import RoomManagement from './RoomManagement/RoomManagement';

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
           </Routes>
           </BrowserRouter>
        
          {/* <Route path="/home"> */}
             
           {/* </Route> 
        // //</Switch>  */}
      
    </div>

  );
}

export default App;
