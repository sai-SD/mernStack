import React from 'react'
const TodoList =()=>{
    const [todoArr,setTodoArr] = useState([])
    async function getData(){
        let res = await fetch('http://localhost:3000/todo');
        let data = await res.json();
        console.log(data);
        setTodoArr(data);
    }
    async function del(id){
        let res = await fetch(`http://localhost:3000/todo/${id}`,{
            method:"DELETE"
        })
    }
    useEffect(()=>{
        getData()
    },[todoArr])
    return(
        <div>
            {
                todoArr.map((el) => (
                    <div>
                        <h1>{el.todo}</h1>
                        <h1>{el.isCompleted?"Completed":"NotCompleted"}</h1>
                    </div>
                ))
            }
        </div>
    )
}
export default TodoList