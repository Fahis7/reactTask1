import React from 'react'
import { useState, useEffect } from 'react'

function Task2() {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch(' https://dummyjson.com/quotes')
            .then(res => res.json())
            .then(data => setQuotes(data.quotes));
            
}, []);
return (
    <div>
        {quotes.slice(0,10).map((item)=>(
            <h2 key={item.id}>{item.quote}</h2>
        ))}
    </div>
)
}

export default Task2