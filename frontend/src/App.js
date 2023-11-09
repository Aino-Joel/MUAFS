// import logo from './logo.svg';
import './App.css';
import Header from './header'
import Sidebar from './sidebar'
import Home from './home'


 
   

function App() {
  // const [openSidebar, setOpenSidebar] = useState(false);

  // const OpenSidebar = () => {
  //   setOpenSidebar(!openSidebar)
  // }

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />


    </div>
  );
}

export default App
  



