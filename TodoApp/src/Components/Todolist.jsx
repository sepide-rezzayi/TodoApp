import TodoItem from "./TodoItem";

export default function Todolist() {
  return (
    <div className=" flex justify-center mx-auto w-full bg-zinc-300 py-5 rounded-lg">
      <ul className="flex-col content-start w-full px-[30px] space-y-4">
        <TodoItem />
      </ul>
    </div>
  );
}
