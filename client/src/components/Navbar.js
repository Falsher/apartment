import React from "react";
import RegistUser from "./RegistUser";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <h3>Аренда жилья</h3>
      </div>
      <div>
        <RegistUser />
      </div>
    </nav>
  );
};
export default Navbar;
