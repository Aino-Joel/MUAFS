// import React, { useState } from 'react';
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
// {/* // src/App.js

//import React, { useState } from 'react'; 
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 //import './App.css';
// import Homepage from './Homepage';
//import NotificationsPage from './notifications';

//function App() {
  // const [notifications, setNotifications] = useState
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');



  //const handleLogin = () => {
  //   // Your login logic here
  //   // Assuming successful login, redirect to home page
  //   // You may want to use a state management solution for authentication status
  //   setNotifications([...notifications, {message: 'Welcome! You are logged in.'}]);
  //   window.location.href = '/home';
  // };

  // const handleGoogleLogin = async () => {
  //   // Your Google login logic here
  //   // Assuming successful login, redirect to home page
  //   // You may want to use a state management solution for authentication status
  //   window.location.href = '/home';
  // };

  //return (
    // <Router>
      //<div className="App">
        
//         {/* Login Route */}
//           {/* <Route path="/login"> */}
//             {/* <div className="login-container"> */}
//               <h2>Login</h2>
//               {/* <form>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <button type="button" onClick={handleLogin}>
//                   Login
//                 </button>
//                 <button type="button" onClick={handleGoogleLogin}>
//                   Login with Google
//                 </button> */}
//               {/* </form> */}
//             {/* </div> */}
//           {/* </Route> */}

//           {/* Home Route */}
//           {/* <Route path="/home"> */}
//             {/* <Homepage /> */}
//           {/* </Route> */}

//           {/* Notification route */}
//           {/* <Route path="/notifications"> */}
//             {/* <notifications/> */}
//           {/* </Route> */}
        

//         {/* <ToastContainer autoClose={3000} position="bottom-right" /> */}

//         {/* <link to="notifications">View notifications</link> */}
//       </div>
//     // </Router>
//   );
// }

// export default App; */}
