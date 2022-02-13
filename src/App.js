import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import Search from "./Search.js";

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
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/recepie/:id">
              <RecepieDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
