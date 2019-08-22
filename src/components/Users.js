import React from "react";

export const Users = () => <h1>Users page</h1>;
export function UsersItem(props) {
  return <div>{props.name}</div>;
}
