import React from "react";
import { Route } from "react-router-dom";
import { Home, Users, Name, UsersItem, UsersTable } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" component={Users} />
    <Route path="/users/:name" component={Name} />
    <Route path="/usersitem/" component={UsersItem} />
    <Route path="/userstable/" component={UsersTable} />
  </>
);
