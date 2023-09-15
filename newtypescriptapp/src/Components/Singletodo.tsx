import { type } from 'os'
import React from 'react'
import { Todo } from '../model'
import { BiAdjust } from "react-icons/bi";


type Props={
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Singletodo= ({todo, todos,setTodos}:Props) => {
  return (
    <div>
      <form className='todos_single'>
        <span>{todo.todo}</span>
        <BiAdjust/>
      </form>
    </div>
  )
}

export default Singletodo
