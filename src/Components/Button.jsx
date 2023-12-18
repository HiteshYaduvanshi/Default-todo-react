import React from "react";
import { useTodo } from "../Context/TodoContext";

function Button() {
  const {addTodo } = useTodo();
  return (
    <div>
      <button
        className="rounded-[10px] py-[15px] px-[40px] bg-[#B0D9B1]"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}

export default Button;
