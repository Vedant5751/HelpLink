import { useState } from "react";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
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
          <Route path="/home" element={<Home />} />
          <Route path="/VolProfile" element={<VolProfile />} />
          <Route path="/ColProfile" element={<ColProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
