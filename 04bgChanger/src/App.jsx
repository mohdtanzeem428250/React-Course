import { useState } from 'react'
function App() {
  const [color, setColor]=useState("White")
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className='text-center text-3xl pt-12'>Mohd Tanzeem | Background Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 p-2 rounded-3xl">
          <button onClick={()=>{setColor("Crimson")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Crimson"}}>Crimson</button>
          <button onClick={()=>{setColor("Turquoise")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Turquoise"}}>Turquoise</button>
          <button onClick={()=>{setColor("Lavender")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Lavender"}}>Lavender</button>
          <button onClick={()=>{setColor("Blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Blue"}}>Blue</button>
          <button onClick={()=>{setColor("Teal")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Teal"}}>Teal</button>
          <button onClick={()=>{setColor("Coral")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Coral"}}>Coral</button>
          <button onClick={()=>{setColor("Maroon")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Maroon"}}>Maroon</button>
          <button onClick={()=>{setColor("Indigo")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Indigo"}}>Indigo</button>
          <button onClick={()=>{setColor("Olive")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Olive"}}>Olive</button>
          <button onClick={()=>{setColor("Black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Black"}}>Black</button>
          <button onClick={()=>{setColor("Grey")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Grey"}}>Grey</button>
          <button onClick={()=>{setColor("Purple")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Purple"}}>Purple</button>
          <button onClick={()=>{setColor("Orange")}} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{background:"Orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
