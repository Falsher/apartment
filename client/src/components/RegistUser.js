import React, { useEffect, useState } from "react";

import * as DataApi from "./DataApi";
const RegistUser = () => {
  const [visible, setVisible] = useState(false);

  const [nameUser, setNameUser] = useState("");
  const [password, setPassword] = useState("");

  const nicknameChange = (event) => {
    setNameUser(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const SubmitRegistration = (e) => {
    e.preventDefault();
    DataApi.RegistrationUser(nameUser, password);
    setNameUser("");
    setPassword("");
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setVisible(true);
    }
  }, [token]);
  return (
    <form className={visible ? "not-visible" : "visible"}>
      <input
        className="form-control mt-2 "
        value={nameUser}
        onChange={nicknameChange}
        placeholder="name"
        type="text"
      />
      <input
        className="form-control mt-2 "
        value={password}
        onChange={passwordChange}
        placeholder="password"
        type="password"
      />
      <button className="btn btn-primary mt-2 " onClick={SubmitRegistration}>
        Signup
      </button>
    </form>
  );
};
export default RegistUser;
