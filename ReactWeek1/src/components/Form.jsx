import React from 'react'
import './Form.css'
import { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpass] = useState("")
    const [error, setError] = useState({})
    const [succes, setSucces] = useState({})
    function handleError(e) {
        e.preventDefault();
        const formError = {};
        if (name.trim() === "") {
            formError.name = "name is required"
        }
        if (email.trim() === "") {
            formError.email = "email is required"
        }
        if (password.trim() === "") {
            formError.password = "password is required"
        } else if (password.length < 8) {
            formError.password = "password must be atleast 8 characters"
        }
        if(Object.keys(formError).length>0){
            setError(formError)
            setSucces("");
        }else{
            setError({});
            setSucces("form submitted successfully")
        }
    }

    return (
        <div>
            <div className='formStyle'>
                <div className='formBox'>
                    <input type="text" placeholder='enter your name' required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='you@gamil.com' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' required value={password} onChange={(e) => setpass(e.target.value)} />
                </div>
                <button className='btn' onClick={handleError}>submit</button>

            </div>
        </div>
    )
}

export default Form