import React from 'react'
import { Link } from 'react-router-dom'
import './Pay.css'

function Pay() {
  return (
    <div>
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

            <div className="main-pay">
                <div className="data-pay">
                    <div className="username">
                        Username :
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pay
