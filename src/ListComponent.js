import { useState } from "react";
import { useId } from "react";
import Todo from "./ToDo";
import ButtonDelete from "./ButtonDelete";

const ListComponent = () => {
  const id = useId();

  const toDos = [
    { id: 1, name: "To do first" },
    { id: 2, name: "To do second" },
    { id: 3, name: "To do third" },
  ];

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(toDos);

  const onClickHandler = () => {
    const updatedElement = [...todo, { id: { id }, name: input }];
    setTodo(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handlKeyPress = (e) => {
    if (e.key === "Enter") {
      const updatedElement = [...todo, { id: { id }, name: input }];
      setTodo(updatedElement);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    const filteredTodos = todo.filter((todo) => todo.id !== id);
    setTodo(filteredTodos);
  };

  return (
    <>
      <input
        onChange={onChangeHandler}
        onKeyDown={handlKeyPress}
        value={input}
      />
      <h2>{todo.length}</h2>
      <ul>
        {todo.map((element) => (
          <Todo key={element.id} id={element.id} name={element.name}>
            {
              <ButtonDelete
                text={"delete"}
                onClick={() => deleteTodo(element.id)}
                type={"button"}
              />
            }
          </Todo>
        ))}
      </ul>
      <button onClick={onClickHandler}>Add To Do</button>
    </>
  );
};

export default ListComponent;
