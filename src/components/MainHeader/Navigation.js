import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import { AuthStore } from "../../store/Auth-Context";

const Navigation = () => {
  const AuthCtx = useContext(AuthStore);
  return (
    <nav className={classes.nav}>
      <ul>
        {AuthCtx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {AuthCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {AuthCtx.isLoggedIn && (
          <li>
            <button onClick={AuthCtx.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
