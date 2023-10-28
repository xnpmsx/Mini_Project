import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoExitOutline } from 'react-icons/io5'
import './User.css'
import Dropdown from './Dropdown'
import Airline from './Airline'

function User() {

    const [Selected, setSelected] = useState("")
    const [Airlined, setAirlined] = useState("")

    return (
        <div>
            <div className='Home'>
                <div className='nav-user'>
                    <div className="logo-user">
                        <Link to="/user">Canfly</Link>
                    </div> 
                    <div className="navcenter-user">
                        <div className="navhome-user">
                            <Link to="/user">Home</Link>
                        </div>
                        <div className="navorder-user">
                            <Link to="/user_order">Your order</Link>
                        </div>
                        <div className="navfav-user">
                            <Link to="/user_favourites">Favourites</Link>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className='nav-username'>
                            User name
                        </div>
                    </div>
                    <IoExitOutline className='icon-user-exit' size={25} />
                </div>
            

                <article>
                    <div className="content">
                    <h1>เริ่มเดินทางได้แล้ววันนี้</h1>
                    <h2>จองเที่ยวบินทั่วโลกสำหรับทริปของคุณด้วยข้อเสนอที่ดีที่สุด</h2>
                    </div>
                </article>

                <div className="dropdown-data">
                    <Dropdown Selected={Selected} setSelected={setSelected}/>
                    <Airline Airlined={Airlined} setAirlined={setAirlined}/>
                </div> 

                <div className="submit">
                    <Link to='/user_ticket'>Search</Link>
                </div>
            </div>
        </div>
    )
}

export default User
