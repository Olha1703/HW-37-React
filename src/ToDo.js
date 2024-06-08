import React from "react";

const ToDo = (props) => {
  return (
    <div>
      <li key={props.id}>{props.name}</li>
      {props.children}
    </div>
  );
};

export default ToDo;
