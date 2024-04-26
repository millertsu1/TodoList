

const TodoItem = ({todo,borrarTodo}) => {
  return (
    <li className=' py-5'>
        <span className=' bg-amber-200 w-10 mt-10 font-bold'>{todo}</span>
        <button className='mx-5' onClick={()=> borrarTodo(todo)}>🗑️</button>
    </li>
  )
}

export default TodoItem