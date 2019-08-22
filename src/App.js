import React from "react";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

export function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/:name">Name</Link>
        </li>
        <li>
          <Link to="/usersitem">UsersItem</Link>
        </li>
        <li>
          <Link to="/UsersTable">UsersTable</Link>
        </li>
      </ul>

      <ApplicationRoutes />
    </div>
  );
}
