import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const onLogoutHandler = () => {
    return authCtx.logout();
  };

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Product</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
