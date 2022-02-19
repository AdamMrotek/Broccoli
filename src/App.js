import "./App.css";
import Navbar from "./Navbar.js";
import Main from "./dashboard/Main.js";
import NotFound from "./NotFound.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import { db, auth } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  //controling user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <div className="content">
          <Routes>
            <Route path="/main/*" element={<Main user={user} />} />
            <Route
              path="/"
              element={user ? <Navigate to="/main" /> : <Home />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
