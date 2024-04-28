import { useState,useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Reorder } from "framer-motion";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");

    const [todos, setTodos] = useState(() =>{
        const guardado = localStorage.getItem("todos");
        return guardado ? JSON.parse(guardado) : [];
    });
    

    const borrarTodo = (todoBorrar) =>{
        const actualizarTodos = todos.filter((todo)=> todo !== todoBorrar);
        setTodos(actualizarTodos);
    }
    
    const agregarTodo =(texto)=>{
        setTodos([...todos, texto]);
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()) {
            agregarTodo(inputValue);
            setInputValue("");
        }
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]); 

  return (
    <div className="">
    <h1 className="text-center text-7xl font-bold  ">ToDo List App</h1>
    <form className="flex justify-center place-items-center" onSubmit={handlerSubmit}>
        <input className="p-3 border-2 rounded-lg my-3 mx-3" type="text" placeholder="Agregar ToDos a la lista" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button className="bg-blue-500 text-white border-2 rounded-lg py-3 px-5" type="submit">Agregar</button>
    </form>

    <ol className="mx-auto w-[400px] my-4 rounded-lg list-disc text-center flex flex-col py-3 border-solid border-y ">
        Tareas Agregadas: {todos.length}
        <Reorder.Group values={todos} onReorder={setTodos} >
        {todos.map((todo,index)=>(
            <Reorder.Item value={todo} key={index} className="py-5">
            <TodoItem
            key={index}
            todo={todo}
            borrarTodo={borrarTodo}
            />
            </Reorder.Item> 
        ))}
        </Reorder.Group>
    </ol>
    </div>
  )
} 

export default TodoList

