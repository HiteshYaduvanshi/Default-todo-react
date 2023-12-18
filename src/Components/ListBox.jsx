import React from "react";

import { useTodo } from "../Context/TodoContext";
import List from "./List";

function ListBox() {
  const {list} = useTodo();
  return (
    <>
      <div className="w-1/2">
        <ul>
          {list.map((item, index) => (
            <List item= {item} index= {index}/>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListBox;
