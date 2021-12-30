import React, { useContext } from "react";

import { TodosContext } from "../../../context/todos.context";
export default function TodoBox({ item }) {
  const { todos, editTodos, deleteTodo } = useContext(TodosContext);
  return (
    <>
      <button
        className={
          item.completed
            ? "py-1 px-4 bg-green-200 rounded-l-full"
            : "py-1 px-4 bg-red-400 rounded-l-full"
        }
        onClick={() => {
          editTodos(item.id, {
            id: item.id,
            name: item.name,
            completed: !item.completed,
          });
        }}
      >
        {item.completed ? "OK" : "NO"}
      </button>
      <input
        className="px-4 py-1 bg-gray-200 my-1"
        value={item.name}
        onChange={(e) => {
          editTodos(item.id, {
            id: item.id,
            name: e.target.value,
            completed: item.completed,
          });
        }}
      />
      <button
        className="py-1 px-4 bg-red-400 rounded-r-full"
        onClick={() => {
          deleteTodo(item.id);
        }}
      >
        x
      </button>
    </>
  );
}
