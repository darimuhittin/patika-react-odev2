import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";
import { TodosContext } from "./context/todos.context";
function App() {
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
    console.log(todos);
  };

  const value = { todos, editTodos };
  return (
    <div className="min-h-screen bg-slate-300 h-screen flex items-center justify-center">
      <div>
        <div>
          <h1 className="text-2xl ">todos</h1>
        </div>
        <TodosContext.Provider value={value}>
          <Search />
          <List />
        </TodosContext.Provider>
      </div>
    </div>
  );
}

export default App;
