import React from 'react'
import { Todo } from '../model'
import Singletodo from './Singletodo';
import { Droppable } from 'react-beautiful-dnd';


interface Props{
  todos: Todo[];
  
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
  completedtask: Todo[];
  setCompletedtask:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({todos, setTodos,completedtask, setCompletedtask}) => {
  console.log('todos',todos);

  return (
    <>
    {/* <div>
      {
        todos?.map((item,index) =>(

         <Singletodo
          todo={item} 
         
         todos={todos}
         setTodos={setTodos}
         />
        ))
      }
    </div> */}

    <div className='container'>
   <Droppable droppableId='TodoList'>
    {
      (provided,snapshot)=>(
        <div className={`todos ${snapshot.isDraggingOver?"dragactive":""}`} ref={provided.innerRef} {...provided.droppableProps}>
        <span className='todos__heading'>Active Tasks </span>
        
        {
                todos?.map((item,index) =>(
        
                 <Singletodo
                  todo={item} 
                 index={index}
                 todos={todos}
                 setTodos={setTodos}
                 />
                ))
              }
              {provided.placeholder}
              </div>
      )
    }
     
      </Droppable>
      <Droppable droppableId='removeList'>
{
  (provided,snapshot)=>(
    <div className={`todos remove ${snapshot.isDraggingOver?"dragcomplete":""}`} ref={provided.innerRef}
    {...provided.droppableProps}>
<span className='todos__heading'>Completed Tasks</span>
{
        completedtask?.map((item,index) =>(

         <Singletodo
          todo={item} 
         index={index}
         todos={completedtask}
         setTodos={setCompletedtask}
         />
        ))
      }
      {provided.placeholder}
      </div>

  )
}

      </Droppable>
      
     
    </div>
    </>
  )
}

export default Todolist
