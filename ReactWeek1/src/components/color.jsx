import React from 'react'
import { useState } from 'react'

function Color() {
    const [theme,setTheme]=useState("")
    const colorChange={
        backgroundColor:theme,
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
  return (
    <div style={colorChange}>
        <input type="text" placeholder='type the color' value={theme} onChange={(e)=>setTheme(e.target.value)}/>


    </div>
  )
}

export default Color