import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecepieDetails from "./RecepieDetails.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/create">
              <div>Create</div>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/recepie/:id">
              <RecepieDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
