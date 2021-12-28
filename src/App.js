import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    {name:"Deneme" ,completed:false},
    {name:"Bir" ,completed:false},
    {name:"Iki" ,completed:false},
    {name:"Uc" ,completed:false},
    {name:"Dort" ,completed:false},
  ]);


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-300">
      <div>
        <h1 className="text-2xl ">todos</h1>
      </div>
      <Search setTodos={setTodos}/>
      <List todos={todos} />
    </div>
  );
}

export default App;
