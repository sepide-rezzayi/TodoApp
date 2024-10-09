export default function TodoItem() {
  return (
    <>
      <li className="list-none flex flex-row items-center space-x-4">
        <input type="checkbox" />
        <p> say Helo to mother</p>
      </li>
      <hr className="w-[100%] h-[1px] bg-blue-500 border-0 rounded mx-auto" />
    </>
  );
}
