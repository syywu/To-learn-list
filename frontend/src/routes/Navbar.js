import LoginButton from "../components/Login";
import LogoutButton from "../components/Logout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>To Learn List</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
