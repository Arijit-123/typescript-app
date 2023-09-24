import { useState } from 'react';
import React from 'react';
import './App.css';
import Inputfeilds from './Components/Inputfeilds';
import { Todo } from './model';
import Todolist from './Components/Todolist';
import { DragDropContext,DropResult } from 'react-beautiful-dnd';


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

  console.log("completed task", completedtask);
const onDragEnd=(result:DropResult)=>{
console.log(result);
const {source, destination}=result;
if(!destination) return;
if(destination.droppableId=== source.droppableId && destination.index===source.index){
  return;
} 
let add,active=todos, complete=completedtask;
if(source.droppableId==="TodoList"){
  add=active[source.index];
  active.splice(source.index,1);
}
else{
  add=complete[source.index];
  complete.splice(source.index,1);
}

if(destination.droppableId==="TodoList")
{
  active.splice(destination.index,0,add);
}
else{
  complete.splice(destination.index,0,add);
}

}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className='heading'>Taskify</span>
      <Inputfeilds todo={todo} setTodo={setTodo}  handleAdd={handleAdd} />
     <Todolist todos={todos} setTodos={setTodos} completedtask={completedtask} setCompletedtask={setCompletedtask}/>
       
    </div>
    </DragDropContext>
  )
}

export default App;


  
  

  
  
   
