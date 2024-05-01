const Header = () => {
  return (
    <nav className="">
      <div className="max-w-[1200px] mx-auto w-[90%] flex justify-between items-center h-auto">
        <div className="h-14">
        <h1 className="text-4xl my-3 font-bold">Welcome Back, Barry!</h1>
        <p>Let's create a new task 🗓️</p>
      </div>
      <div className="flex my-3">
        <button className="px-5 py-2 mx-5 rounded-lg border-solid border-black border">
          View Website ↗️
        </button>
        <button className="px-5 py-2  rounded-lg border-solid border-black border bg-orange-500 text-white font-bold">
          My ToDos
        </button>
        <img src="" alt="" />
      </div>
      </div>
    </nav>
  );
};

export default Header;
