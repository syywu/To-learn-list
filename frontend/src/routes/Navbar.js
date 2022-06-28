import LoginButton from "../components/Login";
import LogoutButton from "../components/Logout";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>To Learn List</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">Create</a>
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
