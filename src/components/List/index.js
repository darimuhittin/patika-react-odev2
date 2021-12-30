import React, { useContext, useState, useEffect } from "react";
import { TodosContext } from "../../context/todos.context";
import TodoBox from "./TodoBox";
export default function List({ filter, setFilter }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const clearCompleted = () => {
    setTodos(
      todos.filter((item) => {
        return item.completed === false;
      })
    );
  };
  useEffect(() => {
    setFilteredTodos(
      todos.filter((item) => {
        switch (filter) {
          case "all":
            return true;
          case "active":
            return item.completed === false;
          case "completed":
            return item.completed === true;
        }
      })
    );
  }, [filter, todos]);
  return (
    <>
      <ul>
        {filteredTodos.map((item) => {
          return (
            <li>
              <TodoBox item={item} />
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between">
        <div>{filteredTodos.length} items left.</div>
        <div className="flex justify-between space-x-4">
          <button
            className="text-sm border-2 px-2 rounded-md"
            onClick={() => {
              setFilter("all");
            }}
          >
            All
          </button>
          <button
            className="text-sm border-2 px-2 rounded-md"
            onClick={() => {
              setFilter("active");
            }}
          >
            Active
          </button>
          <button
            className="text-sm border-2 px-2 rounded-md"
            onClick={() => {
              setFilter("completed");
            }}
          >
            Completed
          </button>
        </div>
        {todos.filter((item) => item.completed === true).length > 0 ? (
          <button
            className="text-sm"
            onClick={() => {
              clearCompleted();
            }}
          >
            Remove Completed
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
