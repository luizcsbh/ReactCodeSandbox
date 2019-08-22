import React from "react";
import PropTypes from "prop-types";

export function UsersItem(props) {
  return (
    <div>
      Nome: {props.name} <br />
      E-mail: {props.email}
      <br />
      Idade: {props.idade}
      <br />
      <br />
    </div>
  );
}

UsersItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  idade: PropTypes.number,
  onToggleCompleted: PropTypes.func
};
