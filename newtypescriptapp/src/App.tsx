import { useState } from 'react';
import React from 'react';
import './App.css';
import Inputfeilds from './Components/Inputfeilds';
import { Todo } from './model';
import Todolist from './Components/Todolist';
import { DragDropContext } from 'react-beautiful-dnd';


const App:React.FC = () => {
  const[todo, setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);
const [completedtask,setCompletedtask]=useState<Todo[]>([]);

  const handleAdd=(e: React.FormEvent)=>{
e.preventDefault();
if(todo)
{
  setTodos([...todos, {id:Date.now(),todo, isdone:false}]);
  setTodo("");
}

  }
  console.log('zingu todo',todo);
  return (
    <DragDropContext onDragEnd={()=>{}}>
    <div className="App">
      <span className='heading'>Taskify</span>
      <Inputfeilds todo={todo} setTodo={setTodo}  handleAdd={handleAdd} />
     <Todolist todos={todos} setTodos={setTodos} CompletedTask={completedtask} setCompletedtask={setCompletedtask}/>
     
    </div>
    </DragDropContext>
  )
}

export default App;


  
  

  
  
   
