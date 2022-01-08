import React from "react";
import GoogleMap from "./components/GoogleMap";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="container-fluid p-0">
        <div className="col">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default App;
