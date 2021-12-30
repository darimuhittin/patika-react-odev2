import List from "./components/List";
import InputBox from "./components/InputBox";
import { useState } from "react";
import { TodosContext } from "./context/todos.context";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    { id: 0, name: "Deneme", completed: false },
    { id: 1, name: "Bir", completed: false },
    { id: 2, name: "Iki", completed: false },
    { id: 3, name: "Uc", completed: false },
    { id: 4, name: "Dort", completed: false },
  ]);

  const editTodos = (id, newval) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return newval;
        } else {
          return item;
        }
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        if (item.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  const addTodo = (name) => {
    // get max id
    let max = 0;
    Object.keys(todos).forEach((key) => {
      if (key > max) {
        max = key;
      }
    });

    const o = { id: max, name: name, completed: false };

    setTodos([...todos, o]);
  };
  const value = { todos, setTodos, editTodos, deleteTodo, addTodo };
  return (
    <div className="min-h-screen bg-slate-300 h-screen flex items-center justify-center text-center">
      <div className="space-y-2">
        <div>
          <h1 className="text-2xl ">todos</h1>
        </div>
        <TodosContext.Provider value={value}>
          <InputBox />
          <List filter={filter} setFilter={setFilter} />
        </TodosContext.Provider>
      </div>
    </div>
  );
}
