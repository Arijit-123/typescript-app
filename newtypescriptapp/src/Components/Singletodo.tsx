import { type } from 'os'
import React, { useState,useRef,useEffect } from 'react'
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

const handleEdit=(e: React.FormEvent,id:number)=>
{
  e.preventDefault();
setTodos(todos.map((todo)=>(todo.id===id?{...todo, todo:editTodo}:todo)));
setEdit(false);
}


const first = useRef< HTMLInputElement>(null);

useEffect(() => {
first.current?.focus();
}, [edit])

  return (
    <div>
      <form   onSubmit={(e) => handleEdit(e, todo.id)}
         
          className="todos__single">
       {
        edit?(
          <input value={editTodo} onChange={(e)=>seteditTodo(e.target.value)}  className='todos__single--text' ref={first}/>
        ): todo.isdone ? (
          <s className='todos__single--text'>{todo.todo}</s>
        ):(
          <span className="todos__single--text"></span>
        )
       }

        <span className='todos__single--text'>{todo.todo}</span>
        <div>
          <span className='icon' onClick={()=>{
            if(!edit && !todo.isdone)
            {
              setEdit(!edit);
            }
          }}>
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
