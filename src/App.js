import Home from "../src/routes/Home";
import Navbar from "./routes/Navbar";
import "./App.css";
import Create from "./routes/Create";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="component">
        <Home />
        <Create />
      </div>
    </div>
  );
}

export default App;
