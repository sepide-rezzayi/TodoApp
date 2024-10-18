/* eslint-disable no-unused-vars */

// API :
// https://6710a717a85f4164ef2eab32.mockapi.io/GitHubtodo

import { useEffect, useState } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid";
export default function TodoApp() {
  const [todos, setTodo] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //**  set a new todo**/

  const handleSubmit = async (e) => {
    if (e.key === "Enter") {
      const newtask = {
        todo: inputValue,
        status: false,
      };
      let res = await fetch(
        "https://6710a717a85f4164ef2eab32.mockapi.io/GitHubtodo",
        {
          method: "post",
          headers: { "content-type": "application/json" },
          // Send your data in the request body as JSON
          body: JSON.stringify(newtask),
        }
      );
      if (res.ok) {
        setTodo([
          ...todos,
          {
            id: uuidv4(),
            todo: inputValue,
            status: false,
          },
        ]);
        setInputValue("");
      }
    }
  };

  //? Stasus Changer
  const toggleTodoStatuse = async (todo) => {
    let res = await fetch(
      `https://6710a717a85f4164ef2eab32.mockapi.io/GitHubtodo/${todo.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          status: !todo.status,
        }),
      }
    );
    if (res.ok) {
      let newTodos = todos.map((todoItem) => {
        if (todo.id == todoItem.id) {
          todo.status = !todoItem.status;
        }
        return todoItem;
      });
      setTodo(newTodos);
    }
  };

  // edite mode
  const editHanle = async (todo, newTitleTodo) => {
    let res = await fetch(
      `https://6710a717a85f4164ef2eab32.mockapi.io/GitHubtodo/${todo.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          todo: newTitleTodo,
        }),
      }
    );
    if (res.ok) {
      let newTodo = todos.map((todoItem) => {
        if (todo.id === todoItem.id) {
          todo.todo = newTitleTodo;
        }
        return todoItem;
      });
      setTodo(newTodo);
    }
  };

  // ** get data from API
  const getDataFromAPI = async () => {
    let res = await fetch(
      "https://6710a717a85f4164ef2eab32.mockapi.io/GitHubtodo",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    if (res.ok) {
      setTodo(await res.json());
    }
  };
  useEffect(() => {
    getDataFromAPI();
    // setTodo(JSON.parse(localStorage.getItem("todo_lists")) ?? []);
  }, [todos]);
  // useEffect(() => {
  //   localStorage.setItem("todo_lists", JSON.stringify(todos));
  // }, [todos]);

  //! DELETE handler
  const deleteTodoHandler = async (todo) => {
    let res = await fetch(
      `https://6710a717a85f4164ef2eab32.mockapi.io/GitHubtodo/${todo.id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      let newTodos = todos.filter((todoItem) => {
        return todo.id !== todoItem.id;
      });
      setTodo(newTodos);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-auto mt-16 w-[80vw] laptop:w-[25vw]  tablet:w-[90vw]  text-2xl laptop:text-base tablet:text-4xl">
      <div className="w-full flex justify-center items-center mb-10 ">
        <div className="flex items-center mt-1 w-full ">
          <input
            value={inputValue}
            type="text"
            onKeyDown={handleSubmit}
            onChange={handleInputChange}
            className=" bg-stone-200 w-full h-10 px-3 text-2xl text-blue-500 border border-r-0 rounded-r-none  focus:outline-none rounded shadow-sm laptop:text-base"
            placeholder="Add new TODO"
          />
          <button
            className="h-10 px-4 text-2xl bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 
  uppercase hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none laptop:text-base"
          >
            add
          </button>
        </div>
      </div>
      <Todolist
        todos={todos}
        toggleTodoStatuse={toggleTodoStatuse}
        editHanle={editHanle}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
}
