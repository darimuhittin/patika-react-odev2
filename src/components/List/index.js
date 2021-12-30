import React, { useContext } from "react";
import { TodosContext } from "../../context/todos.context";
export default function List() {
  const { todos, editTodos } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((item) => {
        return (
          <li>
            <input
              className="px-4 py-1 bg-gray-200 rounded-md my-1"
              value={item.name}
              onChange={(e) => {
                editTodos(item.id, {
                  id: item.id,
                  name: e.target.value,
                  completed: item.completed,
                });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
