import './App.css'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Flight from './components/Flight/Flight';
import Ticket from './components/Ticket/Ticket';
import Pay from './components/Pay/Pay';
import Admin_user from './components/Admin_user/Admin_user';
import Admin from './components/Admin/Admin';
import Admin_flight from './components/Admin_flight/Admin_flight';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Signin' element={<Signin />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Ticket' element={<Ticket />}></Route>
        <Route path='/Flight' element={<Flight />}></Route>
        <Route path='/Pay' element={<Pay />}></Route>
        <Route path='/Admin_user' element={<Admin_user />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
        <Route path='/Admin_flight' element={<Admin_flight />}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
