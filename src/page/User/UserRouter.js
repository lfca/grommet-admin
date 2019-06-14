import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserPage } from "./UserPage";
import { UserNewPage } from "./UserNewPage";
export const UserRouter = props => {
  return (
    <Router>
      <Route exact path="/users" component={UserPage} />
      <Route path="/users/new" component={UserNewPage} />
    </Router>
  );
};
