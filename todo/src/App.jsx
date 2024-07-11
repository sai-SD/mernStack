// import { useState } from 'react'
import React from 'react'
function App() {
  // const[todo,setTodo] = useState({})
  const[todo,setTodo] = React.useState([]);
  const [inputValue,setInputValue] = React.useState("");
  // console.log(todo);
  // let inputValue ="";
  // let x = 10;
  // x=20;
  // const[y,setY] = React.useState("10")
  // const [count, setCount] = useState(0)
  // console.log(x);
  // console.log(y);
  // setY(20);
  // console.log(y);
  // let [a,b,c] = [1,2,3];
  // console.log(a,b,c);
  // console.log(inputValue);
  function pushData (){
    setTodo([...todo,inputValue])
    // todo.push(inputValue);
    console.log(todo);
  }
  return (
    <>
      <div>        
      <input type="text" name="" id="" placeholder="add todo" onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button onClick={pushData}>click</button>
      {
        todo.map((el)=>(
          <h1>{el}</h1>
        )
        )
      }
      </div>
    </>
  )
}

export default App
