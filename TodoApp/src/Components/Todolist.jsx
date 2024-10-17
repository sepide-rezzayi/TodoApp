/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import TodoItem from "./TodoItem";

export default function Todolist({
  todos,
  toggleTodoStatuse,
  editHanle,
  deleteTodoHandler,
}) {
  // console.log(todos);

  if (todos.length === 0) {
    return null; // or return a message like "No todos yet!"
  }
  return (
    <div className=" flex justify-center mx-auto w-full bg-zinc-300 py-5 rounded-lg ">
      <ul className="flex-col content-start w-full px-[30px] space-y-4">
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            toggleTodoStatuse={toggleTodoStatuse}
            editHanle={editHanle}
            deleteTodoHandler={deleteTodoHandler}
          />
        ))}
      </ul>
    </div>
  );
}
