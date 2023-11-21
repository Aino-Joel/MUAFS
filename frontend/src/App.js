// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Entry from './components/Entry';
// import Services from './components/Services';
// import Ratings from './components/Ratings';
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import Details from './components/Details';
import Book from './components/Book';



import Hostels from './components/Hostels';

function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/hostels' element={< Hostels />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/details' element={< Details/>}/>
        <Route path='/book' element={< Book/>}/> 
      </Routes>
      
     
     
    </div>
  );
}

export default App;
