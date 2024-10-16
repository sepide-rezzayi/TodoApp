/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function TodoItem({ todo, toggleTodoStatuse }) {
  return (
    <>
      <li className="list-none flex flex-row items-center space-x-4">
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
      </li>
      <hr className="w-[100%] h-[1px] bg-blue-500 border-0 rounded mx-auto" />
    </>
  );
}
