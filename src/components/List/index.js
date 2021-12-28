import React from "react";

export default function List(todos) {
  return (
  <div>
      List Here
      <ul>
        {console.log(todos.todos[0].name)}
      </ul>
  </div>
    );
}
