const TodoItem = ({ todo, borrarTodo }) => {
  return (
    <div className=" flex">
      <img className="w-6" src="..//../assets/images/drag.svg" alt="logo" />
      <li className="w-full flex justify-center items-center px-5 py-5 border-2 rounded-lg bg-gray-200">
        <span className="font-bold">{todo}</span>
      </li>
      <button
        className="mx-5 border-2 rounded-lg p-2"
        onClick={() => borrarTodo(todo)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
