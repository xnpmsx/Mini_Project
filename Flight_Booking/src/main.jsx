import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Signin from './components/Signin/Signin.jsx';
import Flight from './components/Flight/Flight.jsx';
import Ticket from './components/Ticket/Ticket.jsx';
import Pay from './components/Pay/Pay.jsx';
import { BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'Signin',
    element: <Signin/>
  },
  {
    path: 'Login',
    element: <Login/>
  },
  {
    path: 'Flight',
    element: <Flight/>
  },
  {
    path: 'Ticket',
    element: <Ticket/>
  },
  {
    path: 'Pay',
    element: <Pay/>
  },
])
//<RouterProvider router={router} />


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
);