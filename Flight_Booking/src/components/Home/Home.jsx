import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className='nav'>
        <div className="logo">
          <Link to="/">Canfly</Link>
        </div> 
        <div className="navcenter">
          <div className="navhome">
            <Link to="/">Home</Link>
          </div>
          <div className="navorder">
            <Link to="/">Your order</Link>
          </div>
          <div className="navfav">
            <Link to="/">Favourites</Link>
          </div>
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

      <div className="main">
        <div className="content">
          <h1>เริ่มเดินทางได้แล้ววันนี้</h1>
          <h2>จองเที่ยวบินทั่วโลกสำหรับทริปของคุณด้วยข้อเสนอที่ดีที่สุด</h2>
        </div>
      </div>
        <div className="datainput">
            <input type="text" className='inputwhere' placeholder='เดินทางไปที่ไหน'/>
            <input type="text" className='inputwhere' placeholder='วัน'/>
            <input type="text" className='inputwhere' placeholder='เวลา'/>
        </div>      
        <div className="submit">
          <Link to='/Ticket'>Search</Link>
          
        </div>
       
    </div>

    
    </>
  )
}

export default Home
