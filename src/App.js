import Home from "../src/routes/Home";
import List from "./components/List";
import Listitems from "./components/ListItems";
import Navbar from "./routes/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="component">
        <Home />
        <List />
      </div>
    </div>
  );
}

export default App;
