import React, { useContext, useState } from "react";
import Context from "../store/context";
import "./User.css";

function User() {
  const [globalState, globalDispatch] = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [changePassword, setChangePassword] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    isValid && globalDispatch({ type: "LOGIN" });
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
    <div>
      <div
        style={{ display: globalState.isLoggedIn && "none" }}
        className="user"
      >
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
      </div>
      <div style={{display:!globalState.isLoggedIn&&"none"}}>
        <form className="user">
          <div className="user__row">
            <label>Username : </label>
            <span type="text" className="user__input user__username">
              {username}
            </span>
          </div>

          {changePassword ? (
            <div className="user__row">
              <label>New Password : </label>
              <input type="password" className="user__input user__password" />
            </div>
          ) : (
            <div className="user__row">
              <label>Password : </label>
              <span
                type="password"
                className="user__input user__password"
              ></span>
            </div>
          )}

          <div className="user__buttons">
            {!changePassword ? (
              <button
                onClick={() => setChangePassword(true)}
                type="button"
                className="user__submit"
              >
                Change Password
              </button>
            ) : (
              <button
                type="button"
                className="user__submit"
                onClick={() => setChangePassword(false)}
              >
                Save Password
              </button>
            )}
            <button
              type="button"
              onClick={() => globalDispatch({ type: "LOGOUT" })}
              className="user__logout"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
