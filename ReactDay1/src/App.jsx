import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/sample'
import MovieCard from './components/movieCard'
import Task1 from './components/task1'
import "./components/styles/task1.css"
function App() {
  // const movieNumber = 1
  return (
    <>
      {/* <Counter></Counter> */}
      {/* {movieNumber === 1 ? (
        <MovieCard movie={{ title: "This is Film", release_date: "2025" }} />
      ) : (
        <MovieCard movie={{ title: "This is Film", release_date: "2021" }} />
      )} */}
      <Task1/>
    </>
  )

}


export default App
