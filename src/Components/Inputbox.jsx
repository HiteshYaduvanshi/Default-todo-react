import React from "react";
import Button from "./Button";
import { useTodo } from "../Context/TodoContext";

function Inputbox() {
  const { input, setInput } = useTodo();
  return (
    <>
      <div className="w-1/2 flex mt-[50px] rounded-3xl bg-white overflow-hidden py-[20px] px-[10px]">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          className="w-full p-[10px] border-none outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button />
      </div>
    </>
  );
}

export default Inputbox;
