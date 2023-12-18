import React from "react";
import RemoveButton from "./RemoveButton";
function List({ index, item }) {
  return (
    <>
      <li
        key={index}
        className="text-black bg-white flex justify-between my-3 rounded-[10px] p-3 items-center"
      >
        {item}
        <RemoveButton index={index} />
      </li>
    </>
  );
}

export default List;
