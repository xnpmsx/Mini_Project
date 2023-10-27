import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'

function User() {
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
                </div>
            

                <article>
                    <div className="content">
                    <h1>เริ่มเดินทางได้แล้ววันนี้</h1>
                    <h2>จองเที่ยวบินทั่วโลกสำหรับทริปของคุณด้วยข้อเสนอที่ดีที่สุด</h2>
                    </div>
                </article>

                <div className="datainput">
                    <input type="text" className='inputwhere' placeholder='เดินทางไปที่ไหน'/>
                    <input type="text" className='inputwhere' placeholder='วัน'/>
                    <input type="text" className='inputwhere' placeholder='เวลา'/>
                </div>   

                <div className="submit">
                    <Link to='/user_Ticket'>Search</Link>
                </div>
            </div>
        </div>
    )
}

export default User
