import Home from "../src/routes/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "../src/routes/Create";
import NotFound from "../src/routes/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
