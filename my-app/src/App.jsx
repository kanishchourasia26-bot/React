import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('I will run when count is updated ')
  },[count])

  function handleClick() {
    setCount((currentCount) => currentCount + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count is {count}</p>
    </div>
  )
}

export default App
