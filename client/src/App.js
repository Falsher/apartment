import React from "react";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="container-fluid p-0">
        <div className="col">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
