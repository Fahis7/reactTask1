import React from 'react'
import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0)

  function Increment() {
    setCount(count + 1)
  }

  function Decrement() {
    setCount((x)=>x <=0?0:count-1)
  }

  const Reset=()=>{
    setCount(0)
  }
  return (
    <>
    <input type="text" value={count} onChange={(e)=>{
      setCount(Number(e.target.value))
    }} placeholder='enter the number' />
      <h1>{count}</h1>
      <button onClick={Increment}>increment </button>
      <button onClick={Decrement}>decrement</button>
      <button onClick={Reset}>reset</button>
    </>
  )
}
export default Counter