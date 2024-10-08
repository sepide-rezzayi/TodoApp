export default function InputItem() {
  return (
    <div className="flex justify-center items-center mx-auto w-full h-[10vh] relative ">
      <input
        type="text"
        className="rounded-lg  w-[75%] h-[8vh] bg-stone-400 absolute "
      />
      <button className="bg-blue-600 w-[15%]  h-[8vh] uppercase z-10 absolute righ-[25%] rounded-r-lg ">
        add
      </button>
    </div>
  );
}
