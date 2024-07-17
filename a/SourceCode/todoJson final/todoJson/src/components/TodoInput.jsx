import React, { useState } from 'react'

const TodoInput = () => {
    const[todo,setTodo] = useState("")

    async function postData(){
        let obj= {
            id:Math.random()+Date.now()+todo,
            todo: todo,
            isCompleted:false
        }
        let res = await fetch('http://localhost:3000/todo',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        });
        let data = await res.json();
        console.log(data);
    }
  return (
    <div>
        <input required type="text" placeholder='add todo' onChange={(e)=>setTodo(e.target.value)}  />
        <button onClick={postData}>Submit</button>
    </div>
  )
}

export default TodoInput