import React from 'react'
import './Flight.css'
import { FaCouch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Flight = () => {
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


        {/* red */}

        <div className="seat_top_1">
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        </div>
        <div className="seat_top_2">
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        </div>
        <div className="seat_bottom_1">
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        </div>
        <div className="seat_bottom_2">
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        <FaCouch color='red'/>
        
        </div>

        {/* blue */}

        <div className="seat_top_1">

        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        </div>
        <div className="seat_top_2">

        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        </div>
        <div className="seat_bottom_1">

        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        </div>
        <div className="seat_bottom_2">
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        <FaCouch color='blue'/>
        </div>

    </div>

    </>
  )
}

export default Flight
