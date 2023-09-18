import { type } from 'os'
import React, { useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit,AiFillDelete  } from "react-icons/ai";
import { MdDone } from "react-icons/md";


type Props={
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Singletodo= ({todo, todos,setTodos}:Props) => {

const [edit,setEdit]=useState<boolean>(false)
const [editTodo,seteditTodo]=useState<string>(todo.todo)
const handleDone=(id:number)=>{
setTodos(todos.map((todo)=>todo.id===id?{
  ...todo,isdone:!todo.isdone
}:todo));




};

const handleDelete=(id:number)=>{
setTodos(todos.filter((todo)=>todo.id !== id));
}

  return (
    <div>
      <form className='todos__single'>
        <span className='todos__single--text'>{todo.todo}</span>
        <div>
          <span className='icon'>
        <AiFillEdit/>
        </span>
        <span className='icon' onClick={()=>handleDelete(todo.id)}>
        <AiFillDelete/>
        </span>
        <span className='icon' onClick={()=>handleDone(todo.id)}>
        <MdDone/>
        </span>
        </div>
      </form>
    </div>
  )
}

export default Singletodo
