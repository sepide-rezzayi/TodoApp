/* eslint-disable react/prop-types */
import { Pencil, Trash } from "@phosphor-icons/react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function TodoItem({
  todo,
  toggleTodoStatuse,
  editHanle,
  deleteTodoHandler,
}) {
  const [editeMode, setEditeMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.todo);

  const editeTodoHandler = (event) => {
    if (event.key === "Enter") {
      editHanle(todo, editedText);
      setEditeMode(false);
    }
  };

  return (
    <>
      <li className="list-none flex flex-row items-stretch justify-between ">
        {editeMode ? (
          <div className="flex items-center space-x-5 w-full">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={editeTodoHandler}
              className="flex-grow px-2 py-1 border rounded"
              autoFocus
            />
            <Trash
              className="text-[28px] tablet:text-3xl laptop:text-2xl"
              onClick={() => {
                setEditeMode(false);
                setEditedText(todo.todo);
              }}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-5">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => {
                  toggleTodoStatuse(todo);
                }}
              />
              <p
                className={`inline-block text-gray-800 ${
                  todo?.status ? "line-through" : ""
                }`}
              >
                {todo.todo}
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <Pencil
                className="text-[28px] tablet:text-3xl laptop:text-2xl"
                onClick={() => {
                  setEditeMode(true);
                }}
              />
              <Trash
                className="text-[28px] tablet:text-3xl laptop:text-2xl"
                onClick={() => {
                  deleteTodoHandler(todo);
                }}
              />
            </div>
          </>
        )}
      </li>
      <hr className="w-[100%] h-[1px] bg-blue-500 border-0 rounded mx-auto" />
    </>
  );
}
