export default function InputItem() {
  return (
    <div className="w-full flex justify-center items-center mb-10">
      {/* <div className="max-w-xl mx-auto p-6"> */}
      <div className="flex items-center mt-1 w-full ">
        <input
          type="text"
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
    // </div>
  );
}
