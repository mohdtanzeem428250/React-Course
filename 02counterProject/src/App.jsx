import { useState } from 'react'
import './App.css'

function App() {

  function increment() {
    if(count<100)
    {
      setCount(count+1);
    }
  }

  function decrement() {
    if(count>0)
    {
      setCount(count-1);
    }
  }
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Counter Project Here!</h1>
      <h5>Click on the buttons to increment or decrement the counter</h5>
      <p>Counter can only go from 0 to 100</p>
      <p>Count: {count}</p>
      <button style={{ marginRight: '10px', padding: '8px', backgroundColor: 'lightgray' }} onClick={increment}>Increment</button>
      <button style={{ padding: '8px', backgroundColor: 'lightgray' }} onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App
