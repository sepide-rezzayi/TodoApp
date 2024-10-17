/* eslint-disable react/prop-types */
import { Pencil, Trash } from "@phosphor-icons/react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function TodoItem({ todo, toggleTodoStatuse, editHanle }) {
  const [editeMode, setEditeMode] = useState(false);
  const editeTodoHandler = (event) => {
    if (event.key === "Enter") {
      editHanle(todo, event.target.value);
      setEditeMode(false);
    }
  };
  return (
    <>
      <li className="list-none flex flex-row items-stretch justify-between ">
        {editeMode ? (
          <div className="flex items-center space-x-5  ">
            <input
              type="checkbox"
              checked={todo.status}
              onKeyDown={editeTodoHandler}
              onChange={() => {}}
            />
            <Trash
              size={28}
              onClick={() => {
                setEditeMode(false);
              }}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-5  ">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => {
                  toggleTodoStatuse(todo);
                }}
              />
              <p
                className={`inline-block text-gray-800  ${
                  todo?.status ? "line-through" : ""
                }`}
              >
                {" "}
                {todo.todo}
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <Pencil
                size={28}
                onClick={() => {
                  setEditeMode(true);
                }}
              />
              <Trash size={28} />
            </div>
          </>
        )}
      </li>
      <hr className="w-[100%] h-[1px] bg-blue-500 border-0 rounded mx-auto" />
    </>
  );
}
