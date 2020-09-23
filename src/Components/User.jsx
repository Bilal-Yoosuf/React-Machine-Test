import React, { useState } from "react";
import LoggedUser from "./LoggedUser";
import "./User.css";

function User() {
  const [isLogged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    isValid && setLogged(true);
  };

  const formValidation = () => {
    const usernameErr = {};
    const passwordErr = {};
    let isValid = true;
    if (username.trim().length < 5) {
      usernameErr.usernameShort = "Username is too short";
      isValid = false;
    }
    if (username.trim().length > 20) {
      usernameErr.usernameLong = "Username is too long";
      isValid = false;
    }
    if (password.length < 8) {
      passwordErr.passwordShort = "Password is too short";
      isValid = false;
    }
    if (password.length > 20) {
      passwordErr.passwordLong = "Password is too Long";
      isValid = false;
    }
    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    return isValid;
  };
  return (
    <div className="user">
      {!isLogged ? (
        <form onSubmit={onSubmit} className="user">
          <div className="user__row">
            <label>Username : </label>
            <input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="text"
              className="user__input user__username"
              value={username}
              required
            />
          </div>
          {Object.keys(usernameErr).map((key) => {
            return <div style={{ color: "red" }}>{usernameErr[key]}</div>;
          })}
          <div className="user__row">
            <label>Password : </label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              className="user__input user__password"
              value={password}
              required
            />
          </div>
          {Object.keys(passwordErr).map((key) => {
            return <div style={{ color: "red" }}>{passwordErr[key]}</div>;
          })}

          <button type="submit" className="user__submit">
            Login
          </button>
        </form>
      ) : (
        <LoggedUser username={username} password={password} />
      )}
    </div>
  );
}

export default User;
