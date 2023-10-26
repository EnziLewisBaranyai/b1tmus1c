"use client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Feed from "./Feed";
import YourMusic from "./YourMusic";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/YourMusic" element={<YourMusic />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="B1tMus1c" width="60" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/Feed" className="nav-link text-orange">
                Feed
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/YourMusic" className="nav-link text-orange">
                Your Music
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Profile" className="nav-link text-orange">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;

