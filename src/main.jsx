import   {React, StrictMode} from 'react'
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
import { AuthContextProvider } from './components/context/AuthContext.jsx'
import Account from './pages/Account.jsx'



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
  {
    path: "/account",
    element: <Account/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthContextProvider>
  
  <RouterProvider router={router} />

  </AuthContextProvider>
   
   
  </>
);
