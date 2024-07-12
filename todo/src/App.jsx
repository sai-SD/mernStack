// import { useState } from "react"
import React from 'react'
import TodoComp from "./components/TodoComp";
// import UseEffect from './components/UseEffect'
function App() {
  const [inputValue,setInputValue] = React.useState("");
  const[todoArr,setTodoArr] = React.useState([]);
  // const[todo,setTodo] = useState({})
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
  //--------------------------------------------12/07/24---------------------------
  /*let arr =[1,2,3,4,5,6,7,8,9];
  let newArr = arr.filter((el)=> el%2 !==0)
  console.log(arr,"arr");
  console.log(newArr,"newArr filterf unction");*/
  function pushData (){
    let todoObj ={
      id:Math.random()+Date.now()+inputValue,
      todo:inputValue,
      isCompleted:false
    }
    setTodoArr([...todoArr,todoObj])
    console.log(todoArr);
  }
  function handleDel(id){
    // console.log(id);
    let delTodoArr = todoArr.filter((el) => el.id !==id );//choose the elements whose id is not same as the given id
    setTodoArr(delTodoArr);
  }
  function update(id){
    let updatedArr = todoArr.map((el)=>{
      return el.id === id ? {...el,isCompleted : !el.isCompleted} : el;//it checks for every element in the todoArr, when the id matches it changes the status else no change
    });
    setTodoArr(updatedArr);
  }
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" name="" id="" placeholder="add todo" onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button onClick={pushData}>Add</button>
      {todoArr.map((el)=>(
          <div>
            <TodoComp
              id={el.id}
              todo={el.todo}
              status={el.isCompleted}
              updFun={update}
              delFun={handleDel}/>
          </div>
      ))}
    </div>
  );
}

export default App

{/* <h1>{el.todo}</h1>
<h1>{el.isCompleted? "completed":"not completed"}</h1>
<button onClick={()=>handelDel(el.id)}>delete</button>
<button onClick={()=>update(el.id)}>update task</button> */}