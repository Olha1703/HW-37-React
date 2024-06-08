import React from "react";
import ToDo from "./ToDo";

const ArrayToDo = () => {
  const toDos = [
    { id: 1, name: "To do first" },
    { id: 2, name: "To do second" },
    { id: 3, name: "To do third" },
  ];

  return (
    <div>
      {toDos.map((todo) => {
        return (
          <li>
            <ToDo key={todo.id} name={todo.name} />
          </li>
        );
      })}
    </div>
  );
};

export default ArrayToDo;
