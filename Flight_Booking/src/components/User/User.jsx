import React from 'react'
import { Link } from 'react-router-dom'

function User() {
    return (
        <div>
            <div className='Home'>
                <div className='nav'>
                    <div className="logo">
                        <Link to="/">Canfly</Link>
                    </div> 
                    <div className="navcenter-user">
                        <div className="navhome-user">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="navorder-user">
                            <Link to="/">Your order</Link>
                        </div>
                        <div className="navfav-user">
                            <Link to="/">Favourites</Link>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className='nav-username'>
                            User name
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
