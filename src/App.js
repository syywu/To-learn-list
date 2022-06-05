import Create from "./routes/Create";
import "./App.css";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
