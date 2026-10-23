import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './component/home';
import About from './component/about';
import Dashboard from './component/dashboard';


function App() {
  
  return (
   <div>
   <RouterProvider router={router} />
   </div>
  )
}

export default App
