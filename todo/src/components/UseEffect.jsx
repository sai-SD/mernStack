import React,{useState,useEffect} from 'react'
function UseEffect(){
    const [count,setCount] =useState(0)
    useEffect(()=>{
        console.log("useEffect called")
    })
    function countnInc(){
        setCount(count+1);
    }
    function countnDec(){
        setCount(count-1);
    }
    async function fetchData(){
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json();
        console.log(data);
    }
    // function useEffect(()=>{
    //     console.log("useEffect called");
    //     log();
    //     fetchData();
    // },[])
    // return (
    //     <div>
    //         <h1>UseEffect</h1>
    //         <h1>{count}</h1>
    //         <button onClick={countnInc}>+</button>
    //         <button onClick={countnDec}>-</button>
    //     </div>
    // )
}
export default UseEffect