import React from 'react'
import { useState } from 'react'

function SimpleForm() {
    const [submit,setSubmit]=useState('')
    const handleError=()=>{
        if(submit.trim()==""){
            setSubmit()
            alert("please enter a valid name")
        }else{
            alert("success")
        }
    }
  return (
    <div>
        <input type="text" value={submit} onChange={(e)=>setSubmit(e.target.value)}/>
        <button onClick={handleError}>submit</button>
    </div>
  )
}

export default SimpleForm