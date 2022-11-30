import "./App.css";
import "./Animations.css";
import "./Typography.css";
import Navbar from "./Pages/Navbar.js";
import Main from "./Pages/Main.js";
import NotFound from "./Pages/NotFound.js";
import Footer from "./Pages/Footer.js";
import Home from "./Pages/Home.js";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import useAuthContext from "./Hooks/useAuthContext.js";

function App() {
  const context = useAuthContext();

  const [registerPopUp, setRegisterPopUp] = useState("none");
  const handlePopUp = (value) => {
    if (value === "login" || value === "register")
      setRegisterPopUp(() => value);
    if (!value) {
      setRegisterPopUp(() => "none");
    }
  };

  return (
    <Router>
      {context.authIsReady && (
        <div className="App">
          <Navbar handlePopUp={handlePopUp} registerPopUp={registerPopUp} />
          <div className="content">
            <Routes>
              <Route
                path="/main/*"
                element={<Main user={context.user} handlePopUp={handlePopUp} />}
              />
              <Route
                path="/"
                element={
                  context.user ? (
                    <Navigate to="/main" />
                  ) : (
                    <Home handlePopUp={handlePopUp} />
                  )
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
