import React, { Component } from "react";
import { UsersItem } from "./UsersItem";

export class UsersTable extends Component {
  state = {
    listTitle: "",
    usersItens: [
      {
        name: "João",
        email: "joao@gmail.com",
        idade: "25"
      },
      {
        name: "Carlos",
        email: "carlos@outlook.com",
        idade: "19"
      },
      {
        name: "Pedro",
        email: "pedro@uol.com.br",
        idade: "22"
      },
      {
        name: "Ana",
        email: "ana@terra.com.br",
        idade: "32"
      }
    ]
  };

  render() {
    const handleOnToggleCompleted = taskName => {
      this.setState({
        usersItens: this.state.usersItens.map(task => {
          if (task.name === taskName) {
            return {
              ...task
            };
          }

          return task;
        })
      });
    };

    return (
      <div>
        <ul>
          {this.state.usersItens.map(task => (
            <li>
              <UsersItem
                onToggleCompleted={handleOnToggleCompleted}
                {...task}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
