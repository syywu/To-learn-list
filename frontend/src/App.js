import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import Create from "./routes/Create";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";

function App() {
  return (
    <Router>
      <div className="root">
        <Navbar />
        <LoginButton />
        <LogoutButton />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
