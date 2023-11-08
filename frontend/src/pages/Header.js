import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="Header">
        <Link to={'/'}>Home</Link>
      <Link to={'/hostels'}>Hostels</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Sign Up</Link>
     
    </div>
  )
}

export default Header
