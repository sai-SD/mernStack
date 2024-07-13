import React from 'react'
import TodoComp from "./components/TodoComp"
function App(){
  const [inputValue,setInputValue] = React.useState("");
  const[todoArr,setTodoArr] = React.useState([]);
  function pushData (){
    let todoObj= {
      id:Math.random()+Date.now()+inputValue,
      todo:inputValue,
      isCompleted:false
    }
    setTodoArr([...todoArr,todoObj])
    console.log(todoArr);
  }
  function handleDel(id){
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
