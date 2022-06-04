import Create from "./routes/Create";
import "./App.css";
import Navbar from "./routes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Create />
      </div>
    </div>
  );
}

export default App;
