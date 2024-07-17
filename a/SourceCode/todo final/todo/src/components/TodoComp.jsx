import React from 'react'

const TodoComp = ({todo,status,delFun,id,updFun}) => {
    console.log(todo,status,delFun,id);
    
  return (
        <div>
            <h1>{todo}</h1>
            <h1>{status ? "Completed" : "Not Completed"}</h1>
            <button onClick={()=> delFun(id)}>Delete</button>
            <button onClick={()=> updFun(id)}>Update</button>
        </div>
  )
}

export default TodoComp