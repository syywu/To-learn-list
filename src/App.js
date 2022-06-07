import Home from "../src/routes/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "../src/routes/Create";
import NotFound from "../src/routes/NotFound";
import List from "./components/List";
import Listitems from "./components/ListItems";
import Navbar from "./routes/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="component">
        <h1>To-learn list</h1>
      </div>
      <List>
        <Listitems text="React" />
        <Listitems text="Firebase" />
      </List>
    </div>
  );
}

export default App;
