//Route
import { Switch, Route } from "react-router-dom";

//Component
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

//React
import { useState, useEffect } from "react";

const Routes = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"));

    if (token) {
      setUserAuthenticated(true);
    }
  }, [userAuthenticated]);
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home userAuthenticated={userAuthenticated} />
      </Route>
      <Route path={"/signup"}>
        <Signup userAuthenticated={userAuthenticated} />
      </Route>
      <Route path={"/login"}>
        <Login
          userAuthenticated={userAuthenticated}
          setUserAuthenticated={setUserAuthenticated}
        />
      </Route>
      <Route path={"/dashboard"}>
        <Dashboard userAuthenticated={userAuthenticated} />
      </Route>
    </Switch>
  );
};
export default Routes;
