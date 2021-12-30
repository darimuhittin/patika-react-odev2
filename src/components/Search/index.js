import React from "react";
import { useState, useContext } from "react";
import { TodosContext } from "../../context/todos.context";
export default function Search() {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <input
        className="bg-yellow-100 rounded-xl px-4 py-2"
        type="text"
        name="search"
        id="search"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      />
    </div>
  );
}
