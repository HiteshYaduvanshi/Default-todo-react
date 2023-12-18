import { useEffect } from "react";
import { createContext, useContext, useState } from "react";


const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [input, setInput] = useState("");
  const [list, setList] = useState(()=>{
    const saveList = localStorage.getItem("list");
    return saveList? JSON.parse(saveList) : [];
  });

  const addTodo = () => {
    if (input.trim() !== "") {
      setList((prevTodos) => {
        const newList = [...prevTodos, input];
        setInput("");
        return newList;
      });
    }
  };

  useEffect(() =>{
    localStorage.setItem("list", JSON.stringify(list));
  },[list]);

  const handleRemoveTodo = (index) => {
    const updateList = [...list];
    updateList.splice(index, 1);
    setList(updateList);
  };

  return (
    <TodoContext.Provider value={{ input, setInput, list, setList, addTodo, handleRemoveTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
