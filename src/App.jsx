import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ColLog from "./pages/ColLog";
import Home from "./pages/Home";
import ColHome from "./pages/ColHome";
import VolProfile from "./pages/VolProfile";
import ColProfile from "./pages/ColProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ColLogin" element={<ColLog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ColHome" element={<ColHome />} />
          <Route path="/VolProfile" element={<VolProfile />} />
          <Route path="/ColProfile" element={<ColProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
