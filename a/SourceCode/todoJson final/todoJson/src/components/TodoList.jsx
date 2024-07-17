import React, { useEffect, useState } from 'react'

const TodoList = () => {

    const [todoArr,setTodoArr] = useState([])

    async function getData(){
        let res = await fetch('http://localhost:3000/todo');
        let data = await res.json();
        console.log(data);
        setTodoArr(data)
    }

    async function del(id){
        let res = await fetch(`http://localhost:3000/todo/${id}`,{
            method:"DELETE"
        })
    }

    useEffect(()=>{
        getData()
    },[todoArr])

    let name = "Rahul";
    let x = `my name is ${name}`
  return (
    <div>
        {
            todoArr.map((el)=>(
                 <div>
                    <h1>{el.todo}</h1>
                    <h1>{el.isCompleted? "Completed" : "Not Completed"}</h1>
                    <button onClick={()=>del(el.id)}> delete</button>
                    <h1>{x}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList