import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { Images } from "./components/Images";
import { Gmail } from "./components/Gmail";

function App() {
  return (
    <body>
      <div className="main-container">
        <header className="header-section">
          <nav className="navbar">
            <ul>
              <li className="item item--1">
                <Link to="/">Home</Link>
              </li>
              <li className="item item--2">
                <Link to="/Store">Store</Link>
              </li>
              <li className="item item--3">
                <Link to="/Gmail">Gmail</Link>
              </li>
              <li className="item item--4">
                <Link to="/Images">Images</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Gmail" element={<Gmail />} />
            <Route path="/Images" element={<Images />} />
          </Routes>
        </header>
      </div>
    </body>
  );
}

export default App;
