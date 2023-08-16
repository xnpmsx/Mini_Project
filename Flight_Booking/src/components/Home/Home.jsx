import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className='nav'>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div> 
        <div className="in">
          <div className='sign'>
            <Link to="/Signin">SIGN IN</Link>
          </div>
          <div className='log'>
            <Link to="/Login">LOG IN</Link>
          </div>
        </div>
      </div>

      <div className="content">
        <h1>พร้อมออกเดินทางงงงงงงงง</h1>
        <h2>จองเที่ยวบินทั่วโลกสำหรับทริปของคุณด้วยข้อเสนอที่ดีที่สุด</h2>
      </div>

    </div>

    </>
  )
}

export default Home
