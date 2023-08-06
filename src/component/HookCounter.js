import React, { useEffect, useState } from 'react'

const HookCounter = () => {
    // const channelName = useState("P&D Brothers")
    // const name = channelName[0];
    // const setname = channelName[1];
    
    const [channelName,setName] = useState("P&D Brothers")
    const [count,setCount] = useState(0)
    const [counter,setCounter] = useState(0)
    const useHandler=()=>{
        // channelName[1]("Suresh Kumar")
        setName("Hello Bhai")
    };
    useEffect(()=>{
        console.log("Hello guy's")
    },[count])
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCounter(counter+1);
    }
    const incremented=()=>{
        for(let i=0; i<10; i++)
            setCount(prev=>prev+1);
    }
  return (
    <div>
        {channelName}
        <button onClick={useHandler}>Click me</button>
        <button onClick={increment}>Increment {count}</button>
        <button onClick={decrement}>Decrement {counter}</button>
        <button onClick={incremented}>Incremented</button>
    </div>
  )
}

export default HookCounter
