import React, { useState } from "react";
import "./LoggedUser.css";
import User from "./User";

function LoggedUser(props) {
  const [isLogin, setlogin] = useState(true);
  const [changePassword, setChangePassword] = useState(false);

  return isLogin ? (
    <div>
      <form className="user">
        <div className="user__row">
          <label>Username : </label>
          <span type="text" className="user__input user__username">
            {props.username}
          </span>
        </div>
        
        {changePassword?<div className="user__row">
          <label>New Password : </label>
        <input type="password" className="user__input user__password" />
        </div>:<div className="user__row">
          <label>Password : </label>
          <span type="password" className="user__input user__password"></span>
        </div>}
        

        <div className="user__buttons">
          {!changePassword?<button
            onClick={() => setChangePassword(true)}
            type="button"
            className="user__submit"
          >
            Change Password
          </button>:<button
            type="button"
            className="user__submit"
            onClick={()=>setChangePassword(false)}
          >
            Save Password
          </button>}
          <button
            type="button"
            onClick={() => setlogin(false)}
            className="user__logout"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  ) : (
    <User />
  );
}

export default LoggedUser;
