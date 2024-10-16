/* eslint-disable no-unused-vars */

import { useState } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid";
export default function TodoApp() {
  const [todos, setTodo] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setTodo([
        ...todos,
        {
          todo: inputValue,
          status: false,
        },
      ]);
      setInputValue("");
    }
  };
  const toggleTodoStatuse = (todo) => {
    let newTodos = todos.map((todoItem) => {
      if (todo.id == todoItem.id) {
        todo.status = !todoItem.status;
      }
      return todoItem;
    });
    setTodo(newTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-auto mt-16 w-[25vw]">
      <div className="w-full flex justify-center items-center mb-10">
        <div className="flex items-center mt-1 w-full ">
          <input
            value={inputValue}
            type="text"
            onKeyDown={handleSubmit}
            onChange={handleInputChange}
            className=" bg-stone-200 w-full h-10 px-3 text-sm text-blue-500 border border-r-0 rounded-r-none focus:outline-none rounded shadow-sm"
            placeholder="Add new TODO"
          />
          <button
            className="h-10 px-4 text-sm bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 
  uppercase hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none"
          >
            add
          </button>
        </div>
      </div>
      <Todolist todos={todos} toggleTodoStatuse={toggleTodoStatuse} />
    </div>
  );
}
