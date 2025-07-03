import React, { useState } from 'react'
function Task1() {
    const [darkMode, setDarkMode] = useState(false)

    function handleClick() {
        setDarkMode(!darkMode)
    }

    const doStyle = {
        height: "100vh",
        width: "100%",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const btn = {
        height: "50px",
        width: "170px",
        borderRadius: "20px",
        fontSize: "15px",
    }

    return (
        <div style={doStyle}>
            <button style={btn} onClick={handleClick}>Change clr</button>
        </div>
    )
}

export default Task1