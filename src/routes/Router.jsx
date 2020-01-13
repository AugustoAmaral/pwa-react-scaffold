import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../main/Main";
import NotFound from "../main/NotFound";
import SignIn from "../components/signin/SignIn";

//Import sample compoent
//Import access polices
//Import user info

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Main title="Sample title" topBarButtons={SignIn} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
