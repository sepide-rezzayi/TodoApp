import InputItem from "./InputItem";

import Todolist from "./Todolist";

export default function TodoApp() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-auto mt-16 w-[25vw]">
      <InputItem />
      <Todolist />
    </div>
  );
}
