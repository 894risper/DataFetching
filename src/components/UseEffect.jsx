import React from 'react'
import { useState,useEffect } from 'react'
const UseEffect = () => {
    const [count,setCount]=useState(0);
    const [calculation,setCalculation]=useState(0);
    useEffect(()=>{
        setCalculation(()=>count * 2);
    },[count]);
        
  return (
    <div>UseEffect
       <p>Count: {count}</p>
       <button onClick={()=>setCount((c)=> c+1)}>+</button>
       <p>Calculation: {calculation}</p>
    </div>
  )
}

export default UseEffect;