import React from 'react'
import { Todo } from '../model'


interface Props{
  todos: Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({todos, setTodos}) => {
  console.log('todos',todos);
  return (
    <>
    <div>
      {
        todos.map((item) =>(

         <li> {item.todo}</li>
        ))
      }
    </div>
    </>
  )
}

export default Todolist
