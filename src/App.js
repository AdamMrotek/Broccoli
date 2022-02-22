import "./App.css";
import "./Typography.css";
import Navbar from "./Pages/Navbar.js";
import Main from "./Pages/Main.js";
import NotFound from "./Pages/NotFound.js";
import Footer from "./Pages/Footer.js";
import Home from "./Pages/Home.js";
import { auth } from "./firebase-config.js";
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
  const [registerPopUp, setRegisterPopUp] = useState(false);
  const handlePopUp = () => {
    setRegisterPopUp((registerPopUp) => !registerPopUp);
  };
  //controling user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar
          user={user}
          handlePopUp={handlePopUp}
          registerPopUp={registerPopUp}
        />
        <div className="content">
          <Routes>
            <Route
              path="/main/*"
              element={<Main user={user} handlePopUp={handlePopUp} />}
            />
            <Route
              path="/"
              element={user ? <Navigate to="/main" /> : <Home />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
