import React from 'react'
import { Todo } from '../model'
import Singletodo from './Singletodo';


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
        todos?.map((item,index) =>(

         <Singletodo
          todo={item} 
         
         todos={todos}
         setTodos={setTodos}
         />
        ))
      }
    </div>
    </>
  )
}

export default Todolist
