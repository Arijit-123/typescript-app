import React, { useRef, useState } from 'react'
import '../App.css'

interface Props{
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}
const Inputfeilds:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
const inputref= useRef<HTMLInputElement>(null);
 
  
  return (
    <div>
      input feild
      <form className='input' onSubmit={(e)=>{handleAdd(e); inputref.current?.blur();}}>
        <input  placeholder='enter functions' ref={inputref} value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button className='input_submit' onClick={handleAdd}>GO</button>
      </form>
    </div>
  )
}

export default Inputfeilds
