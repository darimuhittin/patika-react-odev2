import React from "react";
import { useState, useContext } from "react";
import { TodosContext } from "../../context/todos.context";
export default function InputBox() {
  const { addTodo } = useContext(TodosContext);
  const [name, setName] = useState("");
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(name);
          setName("");
        }}
      >
        <input
          className="bg-yellow-100 rounded-xl px-4 py-2"
          type="text"
          name="search"
          id="search"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </form>
    </div>
  );
}
