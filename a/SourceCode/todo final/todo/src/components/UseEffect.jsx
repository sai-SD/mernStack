import React, { useEffect, useState } from 'react'

function UseEffect () {
    const[count,setCount] = useState(0)
    const[count1,setCount1] = useState(0)
    

    // useEffect(()=>{
    //     console.log("UseEffect called" );
    //     log()
    //     fetchData();
    // })

    useEffect(()=>{
            console.log("UseEffect called" );
            log()
            fetchData();
         },[])

    // useEffect(()=>{
    //         console.log("UseEffect called" );
    //         log()
    //         fetchData()
    //  },[count])


    async function fetchData(){
        let res = await fetch("http://localhost:3000/todo")
        let data = await res.json();
        console.log(data);
    }

    function log(){
        console.log("log is called");
    }

    function count1Inc(){
        setCount(count+1)
    }

    function countInc(){
        setCount1(count1+1)
    }

  return (
    <div>
        <h1>useEffect</h1>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button onClick={count1Inc}>+</button>
        <button onClick={countInc}>+</button>
    </div>
  )
}

export default UseEffect