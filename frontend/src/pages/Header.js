import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="Header">
        <br/>
      <img src = "https://sph.mak.ac.ug/sites/default/files/inline-images/WEB%20Mak-3.png" class = "img" alt = ""/>
                    
      <Link to={'/'}>Home</Link>
      <Link to={'/hostels'}>Hostels</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Sign Up</Link>
      
     
    </div>
  )
}

export default Header
