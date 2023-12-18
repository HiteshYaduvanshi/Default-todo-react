import React from "react";
import { useTodo } from "../Context/TodoContext";

function RemoveButton({ index }) {
  const { handleRemoveTodo } = useTodo();
  
  return (
    <div>
      <button
        className="rounded-[10px] py-[15px] px-[40px] bg-[#B0D9B1]"
        onClick={() => handleRemoveTodo(index)}
      >
        Delete
      </button>
    </div>
  );
}

export default RemoveButton;
