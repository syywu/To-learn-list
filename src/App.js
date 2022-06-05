import Create from "./routes/Create";
import "./App.css";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Create />
      </div>
    </div>
  );
}

export default App;
