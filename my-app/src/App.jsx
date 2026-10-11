import './App.css'
import { useState } from 'react'
import Login from './component/login'
import Logout from './component/logout'

function App() {

  const [isloggedin,setloggedin]=useState(true);
  if(isloggedin){
      return (
    <Login/>
  )
  }
  else{
    return (
      <Logout/>
    )
  }
 
}

export default App
