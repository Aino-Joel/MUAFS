import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="Header">
      <br />
      <img
        src="https://sph.mak.ac.ug/sites/default/files/inline-images/WEB%20Mak-3.png"
        className="img"
        alt=""
      />

      <Link to={"/"}>Home</Link>
      <Link to={"/hostels"}>Hostels</Link>
      {user && (
        <div>
          <span>{user.username}</span>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
      {!user && (
        <div>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
