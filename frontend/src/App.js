import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hostels from './pages/Hostels';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/hostels' element={< Hostels />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={< Login />}/>
        
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
