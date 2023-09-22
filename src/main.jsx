import   {React} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Netflix from './pages/Netflix.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Netflix />,
  },
 
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
  
     <RouterProvider router={router} />
   
  </>
);
