import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor]= useState("olive")

  return (
   <div className="w-full h-screen"
   style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center top-11 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style = {{backgroundColor: "red"}}>
          Red
        </button> 
        <button 
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style = {{backgroundColor: "green"}}>
          Green
        </button> 
        <button 
        onClick={() => setColor("Yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style = {{backgroundColor: "Yellow"}}>
          Yellow
        </button> 
        <button 
        onClick={() => setColor("Blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style = {{backgroundColor: "Blue"}}>
          Blue
        </button> 
        <button 
        onClick={() => setColor("Black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style = {{backgroundColor: "Black"}}>
          Black
        </button> 
        <button 
        onClick={() => setColor("White")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style = {{backgroundColor: "White"}}>
          White
        </button> 
        <button 
        onClick={() => setColor("Purple")}
        className="outline-none px-4 py-1 rounded-full text-whiteYellow shadow-lg"
        style = {{backgroundColor: "Purple"}}>
          Purple
        </button> 
        <button 
        onClick={() => setColor("Violet")}
        className="outline-none px-4 py-1 rounded-full text-whiteYellow shadow-lg"
        style = {{backgroundColor: "Violet"}}>
          Violet
        </button> 
        
      </div>
    </div>

   </div>
  )
}

export default App
