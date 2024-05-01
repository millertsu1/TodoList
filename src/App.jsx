import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <>
      <Header />
      <div className=" mt-20">
        <TodoList />
      </div>
    </>
  );
};

export default App;
