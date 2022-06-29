import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import Create from "./routes/Create";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <Router>
      <div className="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <ProtectedRoute
              path="/create"
              element={<Create />}
            ></ProtectedRoute>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
