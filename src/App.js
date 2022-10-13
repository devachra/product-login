import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "./context/auth-context";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Favourite from "./components/FavouritePage/Favourite";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        (
        <Route path="/favourite">
          {authCtx.isLoggedIn && <Favourite />}{" "}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        ) (
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}{" "}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        )
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
