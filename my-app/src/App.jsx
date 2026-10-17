import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './component/home';
import About from './component/about';
import Dashboard from './component/dashboard';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router=createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
}
]);
function App() {
  
  return (
   <div>
   <RouterProvider router={router} />
   </div>
  )
}

export default App
